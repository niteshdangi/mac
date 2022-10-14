import styled, { keyframes } from "styled-components";

type ContainerProps = {
  fadeOut: boolean;
};

const exit = keyframes`
    0% {opacity:1}
    100% {opacity:0; transform: scale(0.5)}
`;

const shake = keyframes`
    0% {transform: translateX(-10px) rotateZ(-5deg)}
    20% {transform: translateX(10px) rotateZ(5deg)}
    40% {transform: translateX(-10px) rotateZ(-5deg)}
    60% {transform: translateX(10px) rotateZ(5deg)}
    80% {transform: translateX(-10px) rotateZ(-5deg)}
    100% {transform: translateX(0px) rotateZ(0deg)}
`;

export const Container = styled.div(
  ({ fadeOut }: ContainerProps) => `
    min-height:100vh;
    background-image: url('/assets/images/bg.jpg');
    bacgrkound-position:center;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    z-index:1050;
    opacity: ${fadeOut ? 0 : 1};
    transition: opacity 1s linear;

    .bg {
        width:100vw;
        height:100vh;
        background-color:transparent;
        backdrop-filter:blur(20px);
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .content {
        display:flex;
        align-items:center;
        justify-content:center;

        .user-profile{
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          margin: 0 50px;
            img {
                width: 135px;
                height: 135px;
            }
            span {
                font-size:22px;
                font-weight: bold;
                color:white;
                text-shadow: 0 0 10px #000;
                text-align: center;
                display:block;
                margin-top: 15px;
            }
        }

    }
`
);
export const UserProfile = styled.div`
  transition: 0.3;
  &.non-selected img {
    animation-name: ${exit};
    animation-duration: 0.3s;
  }
  &.non-selected span {
    animation-name: ${exit};
    animation-duration: 0.3s;
  }
  form {
    animation-name: ${exit};
    animation-duration: 0.3s;
    animation-direction: reverse;
    img {
      width: 20px !important;
      height: 20px !important;
      margin-top: 20px;
    }
  }
`;
export const Password = styled.input`
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
  outline: none;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  width: 140px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  &.shake {
    animation-name: ${shake};
    animation-duration: 0.3s;
  }
`;

export const Cancel = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s linear;
  div {
    background: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 5px;
    div {
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        display: block;
        position: absolute;
        width: 20px;
        height: 2px;
        background: rgba(255, 255, 255, 0.6);
        border: none;
        padding: 0;
        border-radius: 1px;
        &:first-child {
          transform: rotateZ(45deg);
        }
        &:last-child {
          transform: rotateZ(-45deg);
        }
      }
    }
  }
  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-top: 5px;
  }
  &:hover {
    opacity: 0.6;
  }
`;
