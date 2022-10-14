import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {opacity:0}
100% {opacity:1}
`;

const fadeEnterIn = keyframes`
0% {opacity:0; transform: translateX(-50%) translateY(0%)}
100% {opacity:1;transform: translateX(-50%) translateY(-50%)}
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  z-index: 800;
  &.hiding {
    opacity: 0;
    transition: opacity 0.3s linear;
    form {
      transform: translateX(-50%) translateY(0%);
      transition: all 0.3s linear;
      opacity: 0;
    }
  }
`;
export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 20vw;
  animation-name: ${fadeEnterIn};
  animation-duration: 0.3s;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px;
  z-index: 900;
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    label {
      color: white;
      font-size: 13px;
      margin-right: 15px;
    }
    input {
      color: white;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 6px;
      font-size: 13px;
      padding: 3px 10px;
      width: 20vw;
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  span {
    color: white;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 20px;
  button {
    color: white;
    background: grey;
    border: none;
    border-radius: 6px;
    padding: 3px 10px;
    font-size: 12px;
    margin-left: 10px;
    &:last-child {
      background-color: #2565dc;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
