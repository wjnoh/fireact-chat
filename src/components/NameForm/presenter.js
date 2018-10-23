import React, { Component } from "react";
import "./styles.css";

export default class presenter extends Component {
  render() {
    const { name, handleChange, handleSubmit } = this.props;

    return (
      <section className="name-form">
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
          />
          <button type="submit" className="btn-submit">
            Enter
          </button>
        </form>
      </section>
    );
  }
}
