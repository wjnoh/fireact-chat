import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  componentDidMount = () => {
    this.props.getNameFromIp(this.props.message.ip);
    this.props.handleOnline();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentRoom !== prevProps.currentRoom) {
      this.props.getNameFromIp(this.props.message.ip);
      this.props.handleOnline();
    }
  }

  render() {
    const {
      currentUserIp,
      message,
      messageOwner,
      isNameLoaded,
      isOnline
    } = this.props;
    return (
      <>
        <div
          className={
            currentUserIp === message.ip ? "message message--mine" : "message"
          }
        >
          <div
            className={
              currentUserIp === message.ip
                ? "message__name message__name--mine"
                : "message__name"
            }
          >
            {isNameLoaded ? (
              currentUserIp === message.ip ? (
                <>
                  <div
                    className={
                      isOnline
                        ? "message__online message__online--green"
                        : "message__online"
                    }
                  />
                  {messageOwner}
                </>
              ) : (
                <>
                  {messageOwner}
                  <div
                    className={
                      isOnline
                        ? "message__online message__online--green"
                        : "message__online"
                    }
                  />
                </>
              )
            ) : (
              <img
                className="loading"
                src={require("../../images/Loading-2.svg")}
                alt=""
              />
            )}
          </div>
          <div className="message__content">{message.message}</div>
        </div>
      </>
    );
  }
}
