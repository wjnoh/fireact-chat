import styled from "styled-components";

export const MessageForm = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const MessageFormInput = styled.input`
  width: 100%;
  border: none;
  background-color: white;
  padding-right: 35px;
  &:focus {
    outline: none;
  }
`;

export const MessageFormButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    width: 25px;
    height: auto;
    fill: #74c0fc;
    &:hover {
      fill: #4dabf7;
    }
  }
`;
