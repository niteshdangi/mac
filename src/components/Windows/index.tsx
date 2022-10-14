import React from "react";
import { useSelector } from "react-redux";
import { selectWindows } from "../../global-state";
import Window from "./window";
import * as C from "./styles";

const Windows = () => {
  const windows = useSelector(selectWindows);
  return (
    <>
      {windows.map((window) => (
        <Window key={window.id} {...window} />
      ))}
    </>
  );
};
export default Windows;
