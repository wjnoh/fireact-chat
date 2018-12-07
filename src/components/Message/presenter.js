import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  componentDidMount = () => {
    this.props.getNameFromIp(this.props.message.ip);
  };

  // 방 바뀌면 이름이 이상해지는 문제?
  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentRoom !== prevProps.currentRoom) {
      this.props.getNameFromIp(this.props.message.ip);
    }
  }

  render() {
    const { currentUserIp, message, messageOwner, isNameLoaded } = this.props;
    return (
      <>
        <div
          className={
            currentUserIp === message.ip ? "message message--mine" : "message"
          }
        >
          <span className="message__name">
            {isNameLoaded ? (
              messageOwner
            ) : (
              <img
                className="loading"
                src={require("../../images/Loading-2.svg")}
                alt=""
              />
            )}
          </span>
          <span className="message__content">{message.message}</span>
        </div>
      </>
    );
  }
}
