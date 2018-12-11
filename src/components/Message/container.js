import React, { Component } from "react";
import App from "./presenter";
import fire from "../../shared/Firebase";

export default class container extends Component {
  state = {
    messageOwner: "",
    isNameLoaded: false,
    isOnline: false
  };

  getNameFromIp = ip => {
    // on으로 처리해서 데이터가 많아지면 문제생길 수 있다.
    // 다만 실시간으로 상대 닉네임 새로고침
    if (ip === "0") {
      this.setState({
        messageOwner: "Admin",
        isNameLoaded: true
      });
    } else {
      const userRef = fire.database().ref("/users");
      userRef
        .orderByChild("ip")
        .equalTo(ip)
        .on("value", snap => {
          this.setState({
            messageOwner: Object.values(snap.val())[0].name,
            isNameLoaded: true
          });
        });
    }
  };

  handleOnline = () => {
    const userRef = fire.database().ref("/users");
    const connectedRef = fire.database().ref(".info/connected");

    // 연결 상태를 구독하고 상태를 업데이트
    connectedRef.on("value", snap => {
      if (snap.val() === true) {
        userRef
          .orderByChild("ip")
          .equalTo(this.props.message.ip)
          .on("value", snap => {
            // Admin일 경우에는 무조건 true
            if (this.props.message.ip === "0") {
              this.setState({
                isOnline: true
              });
            } else {
              if (Object.values(snap.val())[0].online) {
                this.setState({
                  isOnline: true
                });
              } else {
                this.setState({
                  isOnline: false
                });
              }
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
        getNameFromIp={this.getNameFromIp}
        handleOnline={this.handleOnline}
      />
    );
  }
}
