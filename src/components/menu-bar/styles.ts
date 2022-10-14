import styled, { keyframes } from "styled-components";

const open = keyframes`
0% {opacity:0;}
50% {opacity:0.5;}
100% {opacity:1;}
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
`;
export const Menu = styled.div`
  position: fixed;
  top: 30px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  padding: 5px;
  border-radius:8px;
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 5px 10px rgba(0,0,0,0.3)
  animation-name: ${open};
  animation-duration: 0.3;
  transition:0.1s;
`;
interface IProps {
  disabled?: boolean;
  right?: boolean;
}

export const MenuItem = styled.div(
  ({ disabled }: IProps) => `
    padding: 1px 10px;
    border-radius:3px;
    font-size:14px;
    color: ${disabled ? "rgba(255,255,255,0.3)" : "white"};
    min-width: 200px;
    &:hover{
        background: ${disabled ? "" : "#2565dc"};
        cursor:pointer;
    }
    & span {
        float:right;
        font-size:13px;
        color: rgba(255,255,255,0.5)
    }
`
);

export const Divider = styled.div`
  width: calc(100% - 20px);
  margin: 2.5px 10px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
`;

export const SpotLight = styled.input(
  ({ icon }: { icon: string }) => `
    position:fixed;
    top: 30vh;
    left: 50%;
    transform:translateX(-50%);
    background-image: url(${icon});
    background-color: rgba(11,11,11,0.6);
    background-size: 20px;
    background-repeat: no-repeat;
    padding: 10px;
    padding-left: 50px;
    background-position-y: 12px;
    background-position-x: 12px;
    border-radius: 10px;
    width:47vw;
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 30px 5px rgba(0,0,0,0.5);
    z-index:1001;
    outline:none;
    color:white;
    border: 1px solid rgba(255,255,255,0.2)
`
);
