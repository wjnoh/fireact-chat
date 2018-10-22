import React, { Component } from "react";
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

  render() {
    return (
      <App {...this.state} {...this.props} handleLogin={this.handleLogin} />
    );
  }
}
