import React, { Component } from "react";
import MessageForm from "./presenter";

class Container extends Component {
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
      <MessageForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Container;
