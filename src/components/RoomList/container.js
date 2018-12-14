import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    roomName: ""
  };

  handleRoomSelect = roomName => {
    const { handleRoomChange, handleListOff } = this.props;
    handleRoomChange(roomName);
    this.setState({
      roomName: ""
    });
    handleListOff();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleRoomSelect={this.handleRoomSelect}
        handleChange={this.handleChange}
      />
    );
  }
}
