import React, { Component } from "react";
import Message from "../Message";
import MessageForm from "../MessageForm";
import Ionicon from "react-ionicons";
import RoomList from "../RoomList";
import MessageList from "../MessageList";

import "./styles.css";

export default class presenter extends Component {
  componentDidMount = () => {
    this.props.checkOnline();
    this.props.checkRoom();
  };

  componentDidUpdate() {
    this.props.checkRoom();
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

          <MessageList
            messages={messages}
            currentUserIp={currentUserIp}
            currentRoom={currentRoom}
          />

          <div className="msg-box__bottom">
            <MessageForm handleMessageSubmit={handleMessageSubmit} />
          </div>
        </div>
      </section>
    );
  }
}
