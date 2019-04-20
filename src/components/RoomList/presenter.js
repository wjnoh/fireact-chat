import React, { Component } from "react";
import * as S from "./styles";
import { withRouter } from "react-router";

class RoomList extends Component {
  render() {
    const {
      isListOn,
      roomList,
      handleRoomSelect,
      handleChange,
      roomName,
      currentRoom
    } = this.props;

    return (
      <S.RoomList none={isListOn ? false : true}>
        <S.RoomListForm
          onSubmit={e => {
            e.preventDefault();
            handleRoomSelect(roomName);
            // input에 붙은 focus 제거
            let focus = document.querySelector(":focus");
            if (focus) focus.blur();
          }}
        >
          <S.RoomListInput
            type="text"
            placeholder="Enter room name!"
            value={roomName}
            name="roomName"
            onChange={handleChange}
            required
            ref={ref => (this.input = ref)}
            autoComplete="off"
            maxLength="8"
          />
          <S.RoomListButton type="submit">Enter</S.RoomListButton>
        </S.RoomListForm>
        <S.Rooms>
          {Object.values(roomList).map((room, index) => {
            return (
              <S.Room
                key={index}
                onClick={() => {
                  handleRoomSelect(room);
                }}
                active={currentRoom === room ? true : false}
              >
                {room}
              </S.Room>
            );
          })}
        </S.Rooms>
      </S.RoomList>
    );
  }
}

export default withRouter(RoomList);
