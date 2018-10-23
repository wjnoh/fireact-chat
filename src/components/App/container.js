import React, { Component } from "react";
import fire from "../../shared/Firebase";

import App from "./presenter";

export default class container extends Component {
  state = {
    isLoaded: false,
    isLoggedIn: false,
    currentUser: "",
    messages: ""
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
    const messagesRef = fire.database().ref("/messages");
    messagesRef.on("value", snap => {
      if (snap.val() !== null) {
        this.setState({
          messages: {
            ...Object.values(snap.val())
          },
          isLoaded: true
        });
      }
    });
  };

  handleMessageSubmit = message => {
    fire
      .database()
      .ref("/messages")
      .push({
        name: this.state.currentUser,
        message: message
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
      />
    );
  }
}
