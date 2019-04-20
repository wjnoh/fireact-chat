import React, { Component } from "react";
import MessageBox from "./presenter";

class Container extends Component {
  state = {
    isListOn: false
  };

  componentDidMount = () => {
    this.props.checkOnline();
    this.props.checkRoom();
  };

  componentDidUpdate() {
    this.props.checkRoom();
  }

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
      <MessageBox
        {...this.state}
        {...this.props}
        handleListOn={this.handleListOn}
        handleListOff={this.handleListOff}
      />
    );
  }
}

export default Container;
