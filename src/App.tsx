import React, { useState, useEffect, useRef } from "react";
import * as C from "./App.styles";

import { Loading } from "./components/loading";
import { WelcomeScreen } from "./components/WelcomeScreen";
import Windows from "./components/Windows";
import MenuBar from "./components/menu-bar";
import Dock from "./components/dock";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, selectPower, setPower } from "./global-state";
import { Power } from "./components/power";

const App = () => {
  const power = useSelector(selectPower);
  const [loading, setLoading] = useState(true);
  const [loadingFadeOut, setLoadingFadeOut] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState(false);
  const [welcomeScreenFadeOut, setWelcomeScreenFadeOut] = useState(false);
  const loggedInUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const setMacPower = (p: string) => {
    dispatch(setPower(p));
  };
  const powered = useRef(false);
  useEffect(() => {
    if (power === "on" && !powered.current) {
      powered.current = true;
      setTimeout(() => {
        setLoading(false);
      }, 4500);

      setTimeout(() => {
        setLoadingFadeOut(true);
        setWelcomeScreen(true);
      }, 4000);
    }
  }, [power]);

  useEffect(() => {
    if (loggedInUser?.name) {
      setTimeout(() => {
        setWelcomeScreenFadeOut(true);
      }, 100);

      setTimeout(() => {
        setWelcomeScreen(false);
      }, 300);
    } else if (!welcomeScreen) {
      setWelcomeScreen(true);
      setWelcomeScreenFadeOut(false);
    }
  }, [loggedInUser]);
  const onfullscreenchange = (ev: Event) => {
    if (document.fullscreenEnabled) {
      if (document.fullscreenElement?.id !== "root") {
        setMacPower("fullScreen");
      }
    }
  };
  const lastPowerState = useRef("on");
  // useEffect(() => {
  //   document.onfullscreenchange = onfullscreenchange;
  // }, []);
  // useEffect(() => {
  //   const resize = () => {
  //     if (window.innerWidth < 1100 && power !== "size") {
  //       lastPowerState.current = power;
  //       setMacPower("size");
  //     } else if (power === "size" && window.innerWidth >= 1100) {
  //       setMacPower(lastPowerState.current);
  //     }
  //   };
  //   window.addEventListener("resize", resize);
  //   return () => {
  //     window.removeEventListener("resize", resize);
  //   };
  // }, [power]);
  if (power !== "on") {
    return <Power setPower={setMacPower} />;
  }
  return (
    <C.Container>
      {loading && <Loading fadeOut={loadingFadeOut} />}
      {welcomeScreen && <WelcomeScreen fadeOut={welcomeScreenFadeOut} />}
      {!loading && !welcomeScreen && (
        <>
          <MenuBar />
          <Windows />
          <Dock />
        </>
      )}
    </C.Container>
  );
};

export default App;
