import styled, { css } from "styled-components";

export const Message = styled.div`
  max-width: 250px;
  margin: 15px 0;
  ${props =>
    props.mine &&
    css`
      margin-left: auto;
      text-align: right;
    `}
`;

export const MessageName = styled.div`
  display: flex;
  align-items: center;
  min-height: 1em;
  margin-bottom: 7px;
  font-size: 14px;
  &:after {
    content: "";
    width: 6px;
    height: 6px;
    background-color: #adb5bd;
    border-radius: 50%;
    margin-left: 7px;
  }
  ${props =>
    props.mine &&
    css`
      justify-content: flex-end;
      &:after {
        content: none;
      }
      &:before {
        content: "";
        width: 6px;
        height: 6px;
        background-color: #40c057;
        border-radius: 50%;
        margin-right: 7px;
      }
    `}
  ${props =>
    props.online &&
    css`
      &:before {
        background-color: #40c057;
      }
      &:after {
        background-color: #40c057;
      }
    `}
`;

export const MessageLoading = styled.img`
  display: block;
  width: 30px;
  min-height: 1em;
  margin-bottom: 7px;
  ${props =>
    props.mine &&
    css`
      margin-left: auto;
    `}
`;

export const MessageContent = styled.div`
  padding: 10px;
  background-color: #dee2e6;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  text-align: left;
  line-height: 1.3rem;
  ${props =>
    props.mine &&
    css`
      background-color: #a5d8ff;
    `}
`;
