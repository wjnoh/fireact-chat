import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isListOn: false
  };

  handleListOn = () => {
    const { getRoomList } = this.props;
    this.setState({
      isListOn: true
    });
    getRoomList();
  };

  handleListOff = () => {
    this.setState({
      isListOn: false
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleListOn={this.handleListOn}
        handleListOff={this.handleListOff}
      />
    );
  }
}
