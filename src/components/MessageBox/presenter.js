import React, { Component } from "react";
import Message from "../Message";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const { messages, isLoaded } = this.props;

    return (
      <section className={isLoaded ? "msg-box" : "msg-box msg-box--none"}>
        <div className="msg-box__container">
          <div className="msg-box__top" />
          <div className="msg-box__messages">
            <Message />
          </div>
          <div className="msg-box__bottom" />
        </div>
      </section>
    );
  }
}
