import styled, { keyframes } from "styled-components";

type ContainerProps = {
  fadeOut: boolean;
};

export const Container = styled.div`
  background: black;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s linear;
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1100;
  flex-direction: column;

  .bg {
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .loadingArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
  }

  .logo {
    position: fixed;
    width: 100px;
    height: 100px;
    opacity: 0.3;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  span {
    position: fixed;
    color: white;
    display: block;
    margin-top: 100px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    opacity: 0.3;
  }
  span:last-child {
    bottom: 0;
    top: unset;
    opacity: 0.9;
  }
`;
