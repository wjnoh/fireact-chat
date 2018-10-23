import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const { currentUser, message } = this.props;

    return (
      <>
        <div
          className={
            currentUser === message.name ? "message message--mine" : "message"
          }
        >
          <span className="message__name">{message.name}</span>
          <span className="message__content">{message.message}</span>
        </div>
      </>
    );
  }
}
