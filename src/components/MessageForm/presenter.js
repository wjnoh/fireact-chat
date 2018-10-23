import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.css";

export default class presenter extends Component {
  render() {
    return (
      <form className="msg-form">
        <input
          type="text"
          className="input"
          placeholder="Type your message here :)"
        />
        <button type="submit" className="msg-form__btn-submit">
          <Ionicon icon="md-send" />
        </button>
      </form>
    );
  }
}
