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

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleLogin={this.handleLogin}
        getMessage={this.getMessage}
      />
    );
  }
}
