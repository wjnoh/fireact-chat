import React, { Component } from "react";
import RoomList from "./presenter";

class Container extends Component {
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
      <RoomList
        {...this.state}
        {...this.props}
        handleRoomSelect={this.handleRoomSelect}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Container;
