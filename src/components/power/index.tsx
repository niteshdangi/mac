import React from "react";
import { useSelector } from "react-redux";
import { selectPower } from "../../global-state";
import * as C from "./styles";

type Props = {
  setPower: (pwer: string) => void;
};

export const Power = ({ setPower }: Props) => {
  const power = useSelector(selectPower);
  return (
    <C.Container>
      <div className="bg">
        <div className="loadingArea">
          <img
            onClick={() => {
              if (power !== "size") {
                setPower("on");
                document.getElementById("root")?.requestFullscreen();
              }
            }}
            className="logo"
            src="/assets/images/apple-logo.png"
            alt="logo"
          />
        </div>
        <span>
          {power === "size"
            ? "Screen Size is not supported!"
            : power === "fullScreen"
            ? "FullScreen is required, Click Apple Logo to continue..."
            : "Click Apple Logo to Power on your Mac"}
        </span>
        <span>
          macOS Clone By{" "}
          <a href="https://niteshdangi.github.io">Nitesh Kumar</a>
        </span>
      </div>
    </C.Container>
  );
};
