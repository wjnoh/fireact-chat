import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { handleLogin } = this.props;
    e.preventDefault();
    handleLogin(this.state.name);
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
