import styled from "styled-components";

type ContainerProps = {
  icon: string;
};

export const Container = styled.div(
  ({ icon }: ContainerProps) => `
    width:50px;
    height:50px;
    background-image: url('/assets/images/icons/appicons/${icon}.png');
    background-position: center;
    background-size:cover;
    margin:10px 7px;
    transition: all ease 0.2s;
    cursor: url('/assets/cursors/link.svg'), auto;
    position:relative;
    div {
      display:none;
    }

    &.dock-icon-0{
      width:75px;
      height:75px;
      margin-top:-25px; 
      div{
        display:block;
      }
    }
    &.dock-icon-1{
      width:65px;
      height:65px;
      margin-top:-15px; 
    }
    &.dock-icon-2{
      width:55px;
      height:55px;
      margin-top:-5px; 
    }
`
);
export const Toast = styled.div`
  border: 1px solid #333;
  border-radius: 3px;
  background: rgba(51, 51, 51, 0.5);
  backdrop-filter: blur(5px);
  color: white;
  font-size: 12px;
  text-align: center;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50%;
  white-space: no-wrap;
  overflow: hidden;
  padding: 2px 7px;
`;
export const Dot = styled.span`
  position: absolute;
  background: #fff;
  opacity: 0.7;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px;
`;
