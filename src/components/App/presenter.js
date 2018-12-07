import React, { Component } from "react";
import NameForm from "../NameForm";
import MessageBox from "../MessageBox";
import { Route } from "react-router-dom";

import "./styles.css";

export default class presenter extends Component {
  componentDidUpdate = () => {
    const { isLoaded, isLoggedIn, getMessages, currentRoom } = this.props;
    if (isLoggedIn && !isLoaded) {
      getMessages(currentRoom);
    }
  };

  render() {
    const {
      isLoaded,
      isLoggedIn,
      isStartLogIn,
      currentUserIp,
      messages,
      handleLogin,
      handleLogout,
      handleMessageSubmit,
      handleRoomChange,
      getRoomList,
      roomList,
      currentRoom
    } = this.props;

    const PublicRoutes = () => {
      return (
        <main className="main">
          <div className="main__container">
            <Route
              path="/"
              render={() => (
                <NameForm handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
              )}
            />
          </div>
        </main>
      );
    };

    const PrivateRoutes = () => {
      return (
        // 기본 경로(/)일 경우 Fireact로 이동하기 때문에 Switch 필요 X
        <Route
          path="/:roomName"
          render={({ match }) => (
            <main className="main">
              <div className="main__container">
                {isLoggedIn && isLoaded ? (
                  <MessageBox
                    messages={messages}
                    isLoaded={isLoaded}
                    handleLogout={handleLogout}
                    currentUserIp={currentUserIp}
                    handleMessageSubmit={handleMessageSubmit}
                    handleRoomChange={handleRoomChange}
                    getRoomList={getRoomList}
                    roomList={roomList}
                    currentRoom={currentRoom}
                    match={match}
                  />
                ) : (
                  <img
                    src={require("../../images/Loading.svg")}
                    alt=""
                    className="loading"
                  />
                )}
              </div>
            </main>
          )}
        />
      );
    };

    return isStartLogIn ? PrivateRoutes() : PublicRoutes();
  }
}
