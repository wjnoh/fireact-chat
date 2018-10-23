import React, { Component } from "react";
import NameForm from "../NameForm";

import "./styles.css";

export default class presenter extends Component {
  componentDidUpdate = () => {
    const { isLoaded, isLoggedIn, getMessage } = this.props;
    if (isLoggedIn && !isLoaded) {
      getMessage();
    }
  };

  render() {
    const {
      isLoaded,
      isLoggedIn,
      currentUser,
      messages,
      handleLogin,
      getMessage
    } = this.props;

    return (
      <main className="main">
        <NameForm handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
        <div className="main__container">
          {isLoggedIn ? (
            isLoaded ? (
              JSON.stringify(messages)
            ) : (
              <img
                src={require("../../images/Loading.svg")}
                alt=""
                className="loading"
              />
            )
          ) : (
            ""
          )}
        </div>
      </main>
    );
  }
}
