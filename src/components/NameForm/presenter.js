import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  componentDidMount = () => {
    this.inputRef.focus();
  };

  componentDidUpdate(prevProps, prevState) {
    this.inputRef.focus();
  }

  render() {
    const { name, handleChange, handleSubmit, isLoggedIn } = this.props;

    return (
      <section
        className={isLoggedIn ? "name-form name-form--none" : "name-form"}
      >
        <form onSubmit={handleSubmit}>
          <span className="logo-text">Fireact Chat</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Whats your name?"
            className="input name-form__input"
            autoComplete="off"
            required
            ref={ref => (this.inputRef = ref)}
          />
          <button type="submit" className="btn-submit">
            Entrance
          </button>
        </form>
      </section>
    );
  }
}
