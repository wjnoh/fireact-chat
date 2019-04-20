import React from "react";
import * as S from "./styles";
import { Route } from "react-router-dom";
import NameForm from "../NameForm";
import MessageBox from "../MessageBox";

const App = props => {
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
    currentRoom,
    checkOnline,
    checkRoom
  } = props;

  const PublicRoutes = () => {
    return (
      <S.Main>
        <S.MainContainer>
          <Route
            path="/"
            render={() => (
              <NameForm handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
            )}
          />
        </S.MainContainer>
      </S.Main>
    );
  };

  const PrivateRoutes = () => {
    return (
      // 기본 경로(/)일 경우 Fireact로 이동하기 때문에 Switch 필요 X
      <Route
        path="/:roomName"
        render={({ match }) => (
          <S.Main>
            <S.MainContainer>
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
                  checkOnline={checkOnline}
                  checkRoom={checkRoom}
                  match={match}
                />
              ) : (
                <img
                  src={require("../../images/Loading.svg")}
                  alt=""
                  className="loading"
                />
              )}
            </S.MainContainer>
          </S.Main>
        )}
      />
    );
  };

  return isStartLogIn ? PrivateRoutes() : PublicRoutes();
};

export default App;
