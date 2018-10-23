import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const { name, handleChange, handleSubmit, isLoggedIn } = this.props;

    return (
      <section
        className={isLoggedIn ? "name-form name-form--none" : "name-form"}
      >
        <form onSubmit={handleSubmit}>
          <span className="logo-text">Fireact Chat</span>

          {/* 로그인 안돼있을 때만 입력할 수 있도록 한다. */}
          {isLoggedIn ? (
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Whats your name?"
              className="input name-form__input"
              autoComplete="off"
              required
              disabled
            />
          ) : (
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Whats your name?"
              className="input name-form__input"
              autoComplete="off"
              required
            />
          )}
          <button type="submit" className="btn-submit">
            Entrance
          </button>
        </form>
      </section>
    );
  }
}
