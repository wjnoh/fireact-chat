import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { handleMessageSubmit } = this.props;
    e.preventDefault();
    handleMessageSubmit(this.state.message);
    this.setState({
      message: ""
    });
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
