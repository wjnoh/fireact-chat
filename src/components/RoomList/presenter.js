import React, { Component } from "react";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      isListOn,
      handleRoomChange,
      roomList,
      handleRoomSelect,
      handleChange,
      roomName,
      handleListOff,
      clearRoomName
    } = this.props;

    return (
      <div className={isListOn ? "room-list" : "room-list room-list--none"}>
        <form
          className="room-list__form"
          onSubmit={e => {
            e.preventDefault();
            handleRoomChange(roomName);
            handleListOff();
            clearRoomName();
            // 한번에 handleRoomChange 함수에 넣어서는 작동이 안된다.
            // 왜지?? e 때문에 그런 것 같다.
          }}
        >
          <input
            type="text"
            className="input"
            placeholder="Enter room name!"
            value={roomName}
            name="roomName"
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit">
            Entrance
          </button>
        </form>
        <div className="rooms">
          {Object.values(roomList).map((room, index) => {
            return (
              <span
                key={index}
                className="room"
                onClick={() => {
                  handleRoomSelect(room);
                }}
              >
                {room}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
