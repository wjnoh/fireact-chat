import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const { name, handleChange, handleSubmit } = this.props;

    return (
      <section className="name-form">
        <form onSubmit={handleSubmit}>
          <div className="logo-container">
            <img
              src={require("../../images/icon.png")}
              alt=""
              className="logo-icon"
            />
            <span className="logo-text">Fireact Chat</span>
          </div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Whats your name?"
            className="input name-form__input"
            autoComplete="off"
            required
            maxLength="8"
          />
          <button type="submit" className="btn-submit">
            Enter
          </button>
        </form>
      </section>
    );
  }
}
