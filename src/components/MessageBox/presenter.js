import React, { Component } from "react";
import Message from "../Message";
import MessageForm from "../MessageForm";
import Ionicon from "react-ionicons";
import RoomList from "../RoomList";

import "./styles.css";

export default class presenter extends Component {
  componentDidMount = () => {
    this.msgRef.scrollTop = this.msgRef.scrollHeight;
  };

  componentDidUpdate() {
    this.msgRef.scrollTop = this.msgRef.scrollHeight;
  }

  render() {
    const {
      messages,
      isLoaded,
      handleLogout,
      currentUserIp,
      handleMessageSubmit,
      handleRoomChange,
      isListOn,
      handleListOn,
      handleListOff,
      roomList,
      currentRoom,
      match
    } = this.props;

    return (
      <section className={isLoaded ? "msg-box" : "msg-box msg-box--none"}>
        <div className="msg-box__container">
          <div className="msg-box__top">
            <Ionicon
              icon="ios-arrow-back"
              onClick={() => {
                handleLogout();
              }}
              className="mst-box__btn-back"
            />
            <span>{match.params.roomName}</span>
            <Ionicon
              icon={isListOn ? "md-close" : "md-menu"}
              className="mst-box__btn-list"
              onClick={() => (isListOn ? handleListOff() : handleListOn())}
            />
          </div>

          <RoomList
            isListOn={isListOn}
            handleRoomChange={handleRoomChange}
            roomList={roomList}
            handleListOff={handleListOff}
          />

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
          <div className="msg-box__bottom">
            <MessageForm handleMessageSubmit={handleMessageSubmit} />
          </div>
        </div>
      </section>
    );
  }
}
