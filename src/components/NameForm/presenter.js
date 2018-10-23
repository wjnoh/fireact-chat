import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const { name, handleChange, handleSubmit, isLoggedIn } = this.props;

    return (
      <section
        className={isLoggedIn ? "name-form name-form--none" : "name-form"}
      >
        <div className="name-form__container">
          <form onSubmit={handleSubmit}>
            <span className="logo-text">Fireact Chat</span>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="이름을 정해주세요."
              className="input name-form__input"
              autoComplete="off"
              required
            />
            <button type="submit" className="btn-submit">
              시작하기
            </button>
          </form>
        </div>
      </section>
    );
  }
}