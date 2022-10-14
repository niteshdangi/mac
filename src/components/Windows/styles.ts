import styled, { keyframes } from "styled-components";

const openWindow = keyframes`
0% {transform:scale(0.6);opacity:0.2}
100% {transform:scale(1);opacity:1}
`;

const blink = keyframes`
  0%  {box-shadow: 0 0 15px 0 rgba(255,0,0,0.4)}
  50%  {box-shadow: 0 0 15px 0 rgba(0,0,0,0.4)}
  100%  {box-shadow: 0 0 15px 0 rgba(255,0,0,0.4)}
`;

export const WindowContainer = styled.div`
  animation-name: ${openWindow};
  animation-duration: 0.3s;
  position: absolute;
  width: 0;
  height: 100%;
  top: 50px;
`;

export const Container = styled.div`
  background-color: #fef5ec;
  width: 720px;
  height: 75vh;
  position: relative;
  bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  &.focused {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.4);
    z-index: 999;
  }
  &.blink {
    animation-name: ${blink};
    animation-duration: 0.3s;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px;
  border-radius: 10px 10px 0px 0px;

  .window-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-left: 3px;
    margin-right: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;

    img {
      width: 7px;
      height: 7px;
      opacity: 0.5;
      position: fixed;
      display: none;
    }
    &:hover {
      img {
        display: block;
      }
    }
    &.close {
      background: #ff6059;
    }
    &.minimize {
      background: #ffbe30;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #FF0000;
    opacity:0.2; */
`;
