import React, { Component } from "react";
import App from "./presenter";
import fire from "../../shared/Firebase";

export default class container extends Component {
  state = {
    name: "",
    isNameLoaded: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { handleLogin } = this.props;
    e.preventDefault();
    handleLogin(this.state.name);
  };

  getNameFromIp = () => {
    fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(res => {
        const userRef = fire.database().ref("/users");
        userRef
          .orderByChild("ip")
          .equalTo(res.ip)
          .once("value", snap => {
            if (snap.val() === null) {
              this.setState({
                isNameLoaded: true
              });
            } else {
              // 이미 타이핑 중이라면 자동완성 X
              if (this.state.name === "") {
                const name = Object.values(snap.val())[0].name;
                this.setState({
                  name: String(name).substring(0, name.length - 4),
                  isNameLoaded: true
                });
              }
            }
          });
      });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        getNameFromIp={this.getNameFromIp}
      />
    );
  }
}
