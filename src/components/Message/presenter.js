import React from "react";
import * as S from "./styles";

const Message = props => {
  const {
    currentUserIp,
    message,
    messageOwner,
    isNameLoaded,
    isOnline
  } = props;

  return (
    <S.Message mine={currentUserIp === message.ip ? true : false}>
      {isNameLoaded ? (
        <S.MessageName
          mine={currentUserIp === message.ip ? true : false}
          online={isOnline ? true : false}
        >
          {messageOwner}
        </S.MessageName>
      ) : (
        <S.MessageLoading
          src={require("../../images/Loading-2.svg")}
          alt="Loading"
          mine={currentUserIp === message.ip ? true : false}
        />
      )}
      <S.MessageContent mine={currentUserIp === message.ip ? true : false}>
        {message.message}
      </S.MessageContent>
    </S.Message>
  );
};

export default Message;
