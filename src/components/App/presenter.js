import React, { Component } from "react";
import NameForm from "../NameForm";
import MessageBox from "../MessageBox";

import "./styles.css";

export default class presenter extends Component {
  componentDidUpdate = () => {
    const { isLoaded, isLoggedIn, getMessage } = this.props;
    if (isLoggedIn && !isLoaded) {
      getMessage();
    }
  };

  render() {
    const {
      isLoaded,
      isLoggedIn,
      currentUser,
      messages,
      handleLogin,
      handleLogout,
      handleMessageSubmit,
      handleRoomChange,
      currentRoom,
      getRoomList,
      roomList
    } = this.props;

    return (
      <main className="main">
        <div className="main__container">
          <NameForm handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
          <MessageBox
            messages={messages}
            isLoaded={isLoaded}
            handleLogout={handleLogout}
            currentUser={currentUser}
            handleMessageSubmit={handleMessageSubmit}
            handleRoomChange={handleRoomChange}
            currentRoom={currentRoom}
            getRoomList={getRoomList}
            roomList={roomList}
          />
          {isLoggedIn ? (
            isLoaded ? (
              ""
            ) : (
              <img
                src={require("../../images/Loading.svg")}
                alt=""
                className="loading"
              />
            )
          ) : (
            ""
          )}
        </div>
      </main>
    );
  }
}
