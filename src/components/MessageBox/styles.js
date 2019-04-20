import styled, { css } from "styled-components";

export const MessageBox = styled.section`
  position: absolute;
  width: 400px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 15px 15px 35px -20px rgba(0, 0, 0, 0.75);
  user-select: none;
  @media (max-width: 640px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
  ${props =>
    props.none &&
    css`
      display: none;
    `}
`;

export const MessageBoxTop = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 640px) {
    position: fixed;
    top: 0;
  }
  svg {
    width: 30px;
    height: auto;
    fill: #74c0fc;
    cursor: pointer;
    &:hover {
      fill: #4dabf7;
    }
  }
  h1 {
    font-size: 25px;
  }
`;

export const MessageBoxBottom = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  border-radius: 0 0 10px 10px;
  bottom: 0;
  background-color: white;
  @media (max-width: 640px) {
    position: fixed;
  }
`;

export const Messages = styled.div`
  height: calc(100% - 110px);
  background-color: #f8f9fa;
  overflow-y: scroll;
  padding: 0 15px;
  @media (max-width: 640px) {
    height: 100%;
    padding-top: 60px;
    padding-bottom: 50px;
  }
`;
