import React, { useState } from "react";
import { MenuIconListLeft, MenuIconListRight } from "../../data/MenuIconList";
import { MenuIcon } from "../menu-icon";
import * as C from "../../App.styles";
import { useDispatch, useSelector } from "react-redux";
import { addWindow, selectWindows } from "../../global-state";
import { IWindow } from "../../interface";

const Dock = () => {
  const activeWindows = useSelector(selectWindows);
  const [activeTab, setActiveTab] = useState(-5);
  const dispatch = useDispatch();
  const handleOpenApp = (window: IWindow) => {
    dispatch(addWindow(window));
  };
  return (
    <C.MenuBottom onMouseLeave={() => setActiveTab(-5)}>
      <>
        {MenuIconListLeft.map((item, index) => (
          <MenuIcon
            onMouseEnter={() => setActiveTab(index)}
            key={index}
            icon={item.icon}
            label={item.window.name}
            onClick={() => handleOpenApp(item.window)}
            className={"dock-icon-" + Math.abs(activeTab - index)}
            isOpened={
              activeWindows.findIndex((w) => w.id === item.window.id) !== -1
            }
          />
        ))}
        <C.Border />
        {MenuIconListRight.map((item, index) => (
          <MenuIcon
            onMouseEnter={() => setActiveTab(index + MenuIconListLeft.length)}
            key={index}
            icon={item.icon}
            label={item.window.name}
            onClick={() => handleOpenApp(item.window)}
            className={
              "dock-icon-" +
              Math.abs(activeTab - (index + MenuIconListLeft.length))
            }
            isOpened={
              activeWindows.findIndex((w) => w.id === item.window.id) !== -1
            }
          />
        ))}
      </>
    </C.MenuBottom>
  );
};
export default Dock;
