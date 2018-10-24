import React, { Component } from "react";
import fire from "../../shared/Firebase";
import { withRouter } from "react-router";

import App from "./presenter";

class container extends Component {
  state = {
    isLoaded: false,
    isLoggedIn: false,
    currentUser: "",
    messages: "",
    currentRoom:
      // 기본 경로로 들어오면 Fireact로 방 설정
      this.props.location.pathname === "/"
        ? "Fireact"
        : this.props.location.pathname,
    roomList: ""
  };

  handleLogin = name => {
    this.setState({
      currentUser: name,
      isLoggedIn: true
    });

    // 기본 경로로 들어왔을 때 기본 방(Fireact)으로 라우터 변경
    this.props.history.push(this.state.currentRoom);
  };

  handleLogout = () => {
    this.setState({
      currentUser: "",
      isLoggedIn: false,
      isLoaded: false,
      messages: ""
    });
  };

  getMessages = currentRoom => {
    const messagesRef = fire
      .database()
      .ref("/rooms/" + currentRoom + "/messages");
    messagesRef.on("value", snap => {
      if (snap.val() !== null) {
        this.setState({
          messages: {
            ...Object.values(snap.val())
          },
          isLoaded: true
        });
      } else {
        messagesRef.push({
          name: "Admin",
          message: "Welcome!"
        });
      }
    });
  };

  // 다른 방으로 넘어가면 이 방 데이터는 off한다.
  offMessages = prevRoom => {
    const messagesRef = fire.database().ref("/rooms/" + prevRoom + "/messages");
    messagesRef.off("value");
  };

  handleMessageSubmit = message => {
    fire
      .database()
      .ref("/rooms/" + this.state.currentRoom + "/messages")
      .push({
        name: this.state.currentUser,
        message: message
      });
  };

  handleRoomChange = roomName => {
    this.props.history.push("/" + roomName);
    this.offMessages(this.state.currentRoom);
    this.setState({
      currentRoom: roomName,
      isLoaded: false
    });
    this.getMessages(roomName);
  };

  getRoomList = () => {
    const roomsRef = fire.database().ref("/rooms");
    roomsRef.on("value", snap => {
      if (snap.val() !== null) {
        this.setState({
          roomList: {
            ...Object.keys(snap.val())
          }
        });
      }
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        getMessages={this.getMessages}
        handleMessageSubmit={this.handleMessageSubmit}
        handleRoomChange={this.handleRoomChange}
        getRoomList={this.getRoomList}
        offMessages={this.offMessages}
      />
    );
  }
}

export default withRouter(container);
