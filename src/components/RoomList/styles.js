import styled, { css } from "styled-components";

export const RoomList = styled.div`
  position: absolute;
  width: 100%;
  max-height: calc(100% - 110px);
  background-color: white;
  padding: 10px 20px;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.1s linear;
  overflow-y: scroll;
  @media (max-width: 640px) {
    top: 60px;
  }
  ${props =>
    props.none &&
    css`
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.1s linear;
    `}
`;

export const RoomListForm = styled.form`
  display: flex;
`;

export const RoomListInput = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #adb5bd;
  font-size: 15px;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-align: center;
  }
`;

export const RoomListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #74c0fc;
  border: 1px solid #74c0fc;
  border-radius: 3px;
  color: #fff;
  height: 35px;
  cursor: pointer;
  font-size: 15px;
  margin-left: 10px;
  padding: 0 10px;
  &:hover {
    background-color: #4dabf7;
    border: 1px solid #4dabf7;
    transition: all 0.1s linear;
  }
`;

export const Rooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px;
`;

export const Room = styled.span`
  color: #adb5bd;
  border: 1px solid #adb5bd;
  padding: 8.5px 10px;
  border-radius: 3px;
  margin: 5px 0px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #74c0fc;
    border: 1px solid #74c0fc;
    color: white;
  }
  ${props =>
    props.active &&
    css`
      background-color: #74c0fc;
      border: 1px solid #74c0fc;
      color: white;
    `}
`;
