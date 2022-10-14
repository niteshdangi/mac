import styled, { keyframes } from "styled-components";

type ContainerProps = {
  fadeOut: boolean;
};

export const Container = styled.div(
  ({ fadeOut }: ContainerProps) => `
    background: black;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity: ${fadeOut ? 0 : 1};
    transition: opacity 0.5s linear;
    backdrop-filter:blur(20px);
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    z-index:1100;
    
    .bg {
        width:100vw;
        height:100vh;
        background-color:transparent;
        backdrop-filter:blur(20px);
        display:flex;
        align-items:center;
        justify-content:center;
    }
    
    .loadingArea {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    
    .logo {
        position:fixed;
        width:100px;
        height:100px;
    }
    
`
);
const loaderAnim = keyframes`
0% {width:0%}
100% {width:100%}
`;
export const Loader = styled.div`
  width: 20vw;
  height: 6px;
  background: black;
  margin-top: 300px;
  border-radius: 3px;
  border: 1px solid white;
  div {
    animation-name: ${loaderAnim};
    animation-duration: 4s;
    background: white;
    height: 4px;
  }
`;
