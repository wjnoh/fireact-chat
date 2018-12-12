import React, { Component } from "react";
import fire from "../../shared/Firebase";
import { withRouter } from "react-router";
import stringHash from "string-hash";

import App from "./presenter";

class container extends Component {
  state = {
    isLoaded: false,
    isLoggedIn: false,
    isStartLogIn: false,
    currentUserIp: "",
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
      isStartLogIn: true
    });

    const userRef = fire.database().ref("/users");

    // api로 현재 유저의 ip를 가져온다.
    fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(res =>
        // 가져온 ip가 db에 있는지 확인한 후,
        userRef
          .orderByChild("ip")
          .equalTo(res.ip)
          .once("value", snap => {
            const userIp = snap.val();
            // 없으면 새로 생성한다.
            if (userIp === null) {
              userRef.push({
                ip: res.ip,
                name: name + " " + String(stringHash(res.ip)).substring(0, 3)
              });
              this.setState({
                currentUserIp: res.ip,
                isLoggedIn: true
              });
            }
            // 있으면 해당 ip의 name만 수정한다.
            else {
              userRef
                .orderByChild("ip")
                .equalTo(res.ip)
                .once("child_added", snap => {
                  fire
                    .database()
                    .ref("users/" + snap.key)
                    .update({
                      name:
                        name + " " + String(stringHash(res.ip)).substring(0, 3)
                    });
                });
              this.setState({
                currentUserIp: res.ip,
                isLoggedIn: true
              });
            }
          })
          .catch(error => {
            alert(error);
            this.handleLogout();
          })
      );

    // 기본 경로로 들어왔을 때 기본 방(Fireact)으로 라우터 변경
    this.props.history.push(this.state.currentRoom);
  };

  handleLogout = () => {
    this.setState({
      currentUserIp: "",
      isLoaded: false,
      isLoggedIn: false,
      isStartLogIn: false,
      messages: ""
    });
    this.offOnline();
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
          ip: "0",
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
        ip: this.state.currentUserIp,
        message: message
      });
  };

  handleRoomChange = roomName => {
    this.offMessages(this.state.currentRoom);
    this.props.history.push("/" + roomName);
    this.setState({
      currentRoom: roomName,
      isLoaded: false,
      messages: ""
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

  checkOnline = () => {
    const connectedRef = fire.database().ref(".info/connected");
    const userRef = fire.database().ref("/users");
    connectedRef.on("value", snap => {
      if (snap.val() === true) {
        fetch("https://api.ipify.org/?format=json")
          .then(res => res.json())
          .then(res => {
            userRef
              .orderByChild("ip")
              .equalTo(res.ip)
              .once("child_added", snap => {
                const ref = fire.database().ref("/users/" + snap.key);
                // 현재 접속 중이니 우선 online을 true로
                ref.update({
                  online: true
                });
                // 만약 접속이 끊기면 online을 false로
                ref.onDisconnect().update({
                  online: false
                });
              });
          });
      }
    });
  };

  offOnline = () => {
    const connectedRef = fire.database().ref(".info/connected");
    const userRef = fire.database().ref("/users");

    // 연결 상태 확인 off
    connectedRef.off();

    // db에서도 online false
    fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(res => {
        userRef
          .orderByChild("ip")
          .equalTo(res.ip)
          .once("child_added", snap => {
            const ref = fire.database().ref("/users/" + snap.key);
            ref.update({
              online: false
            });
          });
      });
  };

  checkRoom = () => {
    const userRef = fire.database().ref("/users");

    fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(res => {
        userRef
          .orderByChild("ip")
          .equalTo(res.ip)
          .once("child_added", snap => {
            const ref = fire.database().ref("/users/" + snap.key);
            ref.update({
              room: this.state.currentRoom
            });
          });
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
        checkOnline={this.checkOnline}
        checkRoom={this.checkRoom}
      />
    );
  }
}

export default withRouter(container);
