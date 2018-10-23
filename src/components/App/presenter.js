import React, { Component } from "react";
import NameForm from "../NameForm";
import MessageBox from "../MessageBox";

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
        <div className="main__container">
          <NameForm handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
          <MessageBox messages={messages} isLoaded={isLoaded} />
          {isLoggedIn ? (
            isLoaded ? (
              ""
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
