import React, { useRef, useState } from "react";
import * as C from "../../App.styles";
import { Divider, Menu, MenuContainer, MenuItem, SpotLight } from "./styles";
import { MenuLeftItems } from "../../data/MenuList/MenuLeftItems";
import { MenuRightItems } from "../../data/MenuList/MenuRightItems";
import { IMenu } from "../../interface";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  selectCurrentUser,
  selectCurrentWindow,
  setPower,
} from "../../global-state";
const menuItems: Record<string, IMenu> = {
  apple: {
    title: "Apple",
    options: [
      {
        label: "About This Mac",
        divider: true,
      },
      { label: "System Preferences" },
      { label: "App Store...", divider: true },
      { label: "Recent Items", divider: true },
      { label: "Force Quit", divider: true },
      {
        label: "Sleep",
        action(dispatch?) {
          dispatch?.(setPower("off"));
        },
      },
      {
        label: "Restart...",
        action(dispatch?) {
          dispatch?.(setPower("reload"));
        },
      },
      {
        label: "Shut Down...",
        divider: true,
        action(dispatch?) {
          dispatch?.(setPower("off"));
        },
      },
      {
        label: "Lock Screen",
        action(dispatch?) {
          dispatch?.(logout());
        },
      },
      {
        label: "Logout Nitesh Kumar",
        action(dispatch?) {
          dispatch?.(logout());
        },
      },
    ],
  },
  battery: {
    title: "Battery",
    options: [
      {
        label: "Battery",
        divider: true,
        right: "87%",
      },
      { label: "Battery Preferences" },
    ],
  },
  ...(MenuLeftItems as unknown as Record<string, IMenu>),
};
const MenuBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  menuItems.apple.options[9].label = "Logout " + currentUser?.name;
  const currentWindow = useSelector(selectCurrentWindow);
  const [popupActive, setPopupActive] = useState(false);
  const [spotLight, setSpotLight] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | number>();
  const [x, setX] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);
  const onClick = (index: string | number, isClick?: boolean) => () => {
    if (isClick) {
      setPopupActive((a) => !a || activeMenu !== index);
      if (popupActive) setActiveMenu("");
    }
    if (
      ((typeof activeMenu === "number" || activeMenu === "apple") &&
        (typeof index === "number" || index === "apple")) ||
      isClick
    ) {
      setActiveMenu(index);
      const x1 = document.getElementById("top-menu-item-" + index)?.offsetLeft;
      setX(x1);
    }
    if (spotLight) setSpotLight(false);
  };

  return (
    <>
      <C.MenuTop>
        <C.MenuTopLeft>
          <C.MenuTopList>
            <li
              id={"top-menu-item-apple"}
              onClick={onClick("apple", true)}
              onMouseEnter={onClick("apple")}
              className={activeMenu === "apple" && popupActive ? "active" : ""}
            >
              <img src="/assets/images/apple-logo.png" alt="" />
            </li>
            {MenuLeftItems.map((item, index) => (
              <li
                id={"top-menu-item-" + index}
                key={index}
                onClick={onClick(index, true)}
                onMouseEnter={onClick(index)}
                style={index === 0 ? { fontWeight: "bolder" } : {}}
                className={activeMenu === index && popupActive ? "active" : ""}
              >
                {item.title?.replaceAll(
                  "Finder",
                  currentWindow?.name || "Finder"
                )}
              </li>
            ))}
          </C.MenuTopList>
        </C.MenuTopLeft>
        <C.MenuTopRight>
          <C.MenuTopList>
            <li
              id={"top-menu-item-battery"}
              onClick={onClick("battery", true)}
              className={
                activeMenu === "battery" && popupActive ? "active" : ""
              }
            >
              <img
                src="/assets/images/icons/battery.png"
                alt=""
                className="battery-icon"
              />
            </li>
            <li
              id={"top-menu-item-wifi"}
              onClick={onClick("wifi", true)}
              className={activeMenu === "wifi" && popupActive ? "active" : ""}
            >
              <img src="/assets/images/icons/wifi.png" alt="" />
            </li>
            <li onClick={() => setSpotLight((s) => !s)}>
              <img
                src="/assets/images/icons/search.png"
                alt=""
                className="search-icon"
              />
            </li>
            {MenuRightItems.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </C.MenuTopList>
        </C.MenuTopRight>
      </C.MenuTop>
      {(popupActive || spotLight) && (
        <MenuContainer
          onClick={(e) => {
            e.stopPropagation();
            setPopupActive(false);
            setActiveMenu("");
            setSpotLight(false);
          }}
        >
          {spotLight ? (
            <></>
          ) : (
            <Menu ref={ref} style={{ transform: "translateX(" + x + "px)" }}>
              {menuItems?.[activeMenu || 0]?.options?.map((option) => (
                <React.Fragment key={option.label}>
                  <MenuItem
                    onClick={() => option?.action?.(dispatch)}
                    disabled={option.disabled}
                    right={!!option.right}
                  >
                    {option.label?.replaceAll(
                      "Finder",
                      currentWindow?.name || "Finder"
                    )}
                    {option.right && <span>{option.right}</span>}
                  </MenuItem>
                  {option.divider && <Divider />}
                </React.Fragment>
              ))}
            </Menu>
          )}
        </MenuContainer>
      )}
      {spotLight && (
        <SpotLight
          placeholder="Spotlight Search"
          icon="/assets/images/icons/search.png"
        />
      )}
    </>
  );
};

export default MenuBar;
