import React, { Component } from "react";
import App from "./presenter";
import fire from "../../shared/Firebase";

export default class container extends Component {
  state = {
    messageOwner: "",
    isNameLoaded: false,
    isOnline: false
  };

  getNameOnline = () => {
    if (this.props.message.ip === "0") {
      this.setState({
        messageOwner: "Admin",
        isNameLoaded: true,
        isOnline: true
      });
    } else {
      const userRef = fire.database().ref("/users");
      userRef
        .orderByChild("ip")
        .equalTo(this.props.message.ip)
        .on("value", snap => {
          this.setState({
            messageOwner: Object.values(snap.val())[0].name,
            isNameLoaded: true
          });
          if (
            Object.values(snap.val())[0].online &&
            Object.values(snap.val())[0].room === this.props.currentRoom
          ) {
            this.setState({
              isOnline: true
            });
          } else {
            this.setState({
              isOnline: false
            });
          }
        });
    }
  };

  offNameOnline = () => {
    this.setState({
      messageOwner: "",
      isNameLoaded: false,
      isOnline: false
    });

    const userRef = fire.database().ref("/users");
    userRef
      .orderByChild("ip")
      .equalTo(this.props.message.ip)
      .off();
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        getNameOnline={this.getNameOnline}
        offNameOnline={this.offNameOnline}
      />
    );
  }
}
