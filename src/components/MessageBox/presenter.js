import React, { Component } from "react";
import * as S from "./styles";
import Ionicon from "react-ionicons";
import MessageForm from "../MessageForm";
import RoomList from "../RoomList";
import Message from "../Message";

class MessageBox extends Component {
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
      <S.MessageBox none={isLoaded ? false : true}>
        <S.MessageBoxTop>
          <Ionicon
            icon="ios-arrow-back"
            onClick={() => {
              handleLogout();
            }}
            back
          />
          <h1>{match.params.roomName}</h1>
          <Ionicon
            icon={isListOn ? "md-close" : "md-menu"}
            onClick={() => (isListOn ? handleListOff() : handleListOn())}
          />
        </S.MessageBoxTop>
        <RoomList
          isListOn={isListOn}
          handleRoomChange={handleRoomChange}
          roomList={roomList}
          handleListOff={handleListOff}
          currentRoom={currentRoom}
        />
        <S.Messages ref={ref => (this.msgRef = ref)}>
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
        </S.Messages>
        <S.MessageBoxBottom>
          <MessageForm handleMessageSubmit={handleMessageSubmit} />
        </S.MessageBoxBottom>
      </S.MessageBox>
    );
  }
}

export default MessageBox;
