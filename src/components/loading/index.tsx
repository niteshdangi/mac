import React from "react";
import * as C from "./styles";

type Props = {
  fadeOut: boolean;
};

export const Loading = ({ fadeOut }: Props) => {
  return (
    <C.Container fadeOut={fadeOut}>
      <div className="bg">
        <div className="loadingArea">
          <img
            className="logo"
            src="/assets/images/apple-logo.png"
            alt="logo"
          />

          <C.Loader>
            <div />
          </C.Loader>
        </div>
      </div>
    </C.Container>
  );
};
