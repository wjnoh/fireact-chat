import React, { Component } from "react";
import { withRouter } from "react-router";

import "./styles.css";

class presenter extends Component {
  render() {
    const {
      isListOn,
      roomList,
      handleRoomSelect,
      handleChange,
      roomName
    } = this.props;

    return (
      <div className={isListOn ? "room-list" : "room-list room-list--none"}>
        <form
          className="room-list__form"
          onSubmit={e => {
            e.preventDefault();
            handleRoomSelect(roomName);

            // input에 붙은 focus 제거
            let focus = document.querySelector(":focus");
            if (focus) focus.blur();
          }}
        >
          <input
            type="text"
            className="input"
            placeholder="Enter room name!"
            value={roomName}
            name="roomName"
            onChange={handleChange}
            required
            ref={ref => (this.input = ref)}
            autoComplete="off"
            maxLength="8"
          />
          <button type="submit" className="btn-submit">
            Enter
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

export default withRouter(presenter);
