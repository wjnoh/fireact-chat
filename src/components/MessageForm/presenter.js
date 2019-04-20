import React, { Component } from "react";
import * as S from "./styles";
import Ionicon from "react-ionicons";

class MessageForm extends Component {
  componentDidMount = () => {
    this.inputRef.focus();
  };

  componentDidUpdate(prevProps, prevState) {
    this.inputRef.focus();
  }

  render() {
    const { message, handleChange, handleSubmit } = this.props;

    return (
      <S.MessageForm className="msg-form" onSubmit={handleSubmit}>
        <S.MessageFormInput
          type="text"
          placeholder="Type your message here :)"
          value={message}
          onChange={handleChange}
          name="message"
          autoComplete="off"
          ref={ref => (this.inputRef = ref)}
          maxLength="280"
          required
        />
        <S.MessageFormButton type="submit" className="msg-form__btn-submit">
          <Ionicon icon="md-send" />
        </S.MessageFormButton>
      </S.MessageForm>
    );
  }
}

export default MessageForm;
