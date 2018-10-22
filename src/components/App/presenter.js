import React, { Component } from "react";
import NameForm from "../NameForm";

import "./styles.css";

export default class presenter extends Component {
  render() {
    const {
      isLoaded,
      isLoggedIn,
      currentUser,
      messages,
      handleLogin
    } = this.props;

    return (
      <main className="main">
        <NameForm handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
      </main>
    );
  }
}
