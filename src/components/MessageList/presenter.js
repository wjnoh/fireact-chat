import React, { Component } from "react";
import Message from "../Message";

import "./styles.css";

export default class presenter extends Component {
  componentDidMount = () => {
    this.msgRef.scrollTop = this.msgRef.scrollHeight;
  };

  componentDidUpdate() {
    this.msgRef.scrollTop = this.msgRef.scrollHeight;
  }

  render() {
    const { messages, currentUserIp, currentRoom } = this.props;

    return (
      <div className="msg-box__messages" ref={ref => (this.msgRef = ref)}>
        {Object.values(messages).map((message, index) => {
          return (
            <Message
              key={index}
              message={message}
              currentUserIp={currentUserIp}
              currentRoom={currentRoom}
            />
          );
        })}
      </div>
    );
  }
}
