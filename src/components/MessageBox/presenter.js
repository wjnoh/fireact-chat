import React, { Component } from "react";
import Message from "../Message";
import MessageForm from "../MessageForm";
import Ionicon from "react-ionicons";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const { messages, isLoaded, handleLogout, currentUser } = this.props;

    return (
      <section className={isLoaded ? "msg-box" : "msg-box msg-box--none"}>
        <div className="msg-box__container">
          <div className="msg-box__top">
            <Ionicon
              icon="ios-arrow-back"
              onClick={() => {
                handleLogout();
              }}
            />
            <span>Fireact Chat</span>
            <span />
          </div>
          <div className="msg-box__messages">
            {Object.values(messages).map((message, index) => {
              return (
                <Message
                  key={index}
                  message={message}
                  currentUser={currentUser}
                />
              );
            })}
          </div>
          <div className="msg-box__bottom">
            <MessageForm />
          </div>
        </div>
      </section>
    );
  }
}
