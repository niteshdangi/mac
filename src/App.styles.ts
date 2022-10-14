import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: url("/assets/images/bg.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuTop = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 30px;
  background-color: rgb(67, 14, 166, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  z-index: 1002;
  backdrop-filter: blur(10px);
`;

export const MenuTopLeft = styled.div`
  ul {
    padding: 0px 10px;
  }
`;
export const MenuTopRight = styled.div`
  ul {
    padding: 0px 10px;
  }
`;

export const MenuTopList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: #fff;
  height: 20px;

  li {
    padding: 4px 10px;
    font-size: 12px;
    transition: all ease 0.1s;

    &.active,
    &:focus,
    &:active {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }

    img {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      &.search-icon {
        width: 13px;
        height: 13px;
      }
      &.battery-icon {
        width: 18px;
        height: 18px;
      }
    }

    &:hover {
      cursor: pointer;
    }
    &: last;
  }
`;

export const MenuBottom = styled.div`
  background-color: rgb(67, 14, 166, 0.3);
  position: fixed;
  max-width: 980px;
  height: 70px;
  bottom: 10px;
  border-radius: 10px;
  display: flex;
  z-index: 1000;
  backdrop-filter: blur(15px);
`;

export const Border = styled.div`
  border: 0.2px solid #25ce3a;
  border-radius: 10px;
  background-color: #25ce3a;
  margin: 10px 0px;
  opacity: 0.4;
`;
