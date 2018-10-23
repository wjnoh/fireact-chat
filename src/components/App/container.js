import React, { Component } from "react";
import fire from "../../shared/Firebase";

import App from "./presenter";

export default class container extends Component {
  state = {
    isLoaded: false,
    isLoggedIn: false,
    currentUser: "",
    messages: "",
    currentRoom: "Fireact Chat",
    roomList: ""
  };

  handleLogin = name => {
    this.setState({
      currentUser: name,
      isLoggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      currentUser: "",
      isLoggedIn: false,
      isLoaded: false,
      messages: ""
    });
  };

  getMessage = () => {
    const messagesRef = fire
      .database()
      .ref("/rooms/" + this.state.currentRoom + "/messages");
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
    this.setState({
      currentRoom: roomName,
      isLoaded: false
    });
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
        getMessage={this.getMessage}
        handleMessageSubmit={this.handleMessageSubmit}
        handleRoomChange={this.handleRoomChange}
        getRoomList={this.getRoomList}
      />
    );
  }
}
