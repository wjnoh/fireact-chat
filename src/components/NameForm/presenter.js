import React, { Component } from "react";
import * as S from "./styles";

class NameForm extends Component {
  render() {
    const { name, handleChange, handleSubmit, isNameLoaded } = this.props;

    return (
      <S.NameForm>
        <form onSubmit={handleSubmit}>
          <S.LogoContainer>
            <img src={require("../../images/icon.png")} alt="Logo" />
            <h1>Fireact Chat</h1>
          </S.LogoContainer>
          <S.NameFormInput
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder={isNameLoaded ? "Whats your name?" : "Loading"}
            autoComplete="off"
            required
            maxLength="8"
          />
          <S.NameFormButton
            type="submit"
            disabled={isNameLoaded ? false : true}
          >
            Enter
          </S.NameFormButton>
        </form>
      </S.NameForm>
    );
  }
}

export default NameForm;
