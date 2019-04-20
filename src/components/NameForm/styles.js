import styled from "styled-components";

export const NameForm = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 15px 15px 35px -20px rgba(0, 0, 0, 0.75);
  user-select: none;
  @media (max-width: 640px) {
    width: calc(100% - 50px);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 25px;
  img {
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
  h1 {
    display: block;
    font-size: 28px;
    margin-right: 15px;
  }
`;

export const NameFormInput = styled.input`
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

export const NameFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  margin-top: 10px;
  background-color: #74c0fc;
  border: 1px solid #74c0fc;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background-color: #4dabf7;
    border: 1px solid #4dabf7;
    transition: all 0.1s linear;
  }
`;
