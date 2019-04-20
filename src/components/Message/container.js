import React, { Component } from "react";
import Message from "./presenter";
import fire from "../../shared/Firebase";

class Container extends Component {
  state = {
    messageOwner: "",
    isNameLoaded: false,
    isOnline: false
  };

  componentDidMount = () => {
    this.getNameOnline();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentRoom !== prevProps.currentRoom) {
      this.getNameOnline();
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    // cdu 들어가기 전에 한 번 초기화 시켜준다.
    if (this.props.currentRoom !== nextProps.currentRoom) {
      this.offNameOnline();
      return true;
    }
    return true;
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
    return <Message {...this.state} {...this.props} />;
  }
}

export default Container;
