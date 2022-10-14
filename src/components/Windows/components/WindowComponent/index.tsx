import React, { ReactElement } from "react";
import Spotify from "../../../../apps/spotify";
import WebView from "../../../../apps/webview";
import { IWindow } from "../../../../interface";
import * as C from "./styles";

const DefaultComp = ({ icon, name }: IWindow) => (
  <>
    <img
      className="componentImage"
      src={`/assets/images/icons/appicons/${icon || name}.png`}
      alt="icon"
    />
  </>
);
export const WindowComponent = ({ name, icon }: IWindow) => {
  const compMap: Record<string, () => ReactElement> = {
    // Whatsapp: () => <WebView src="https://niteshdangi.github.io/" />,
    // Finder: () => <WebView src="https://vscode.dev/" />,
    Spotify: Spotify,
  };
  const Comp =
    compMap?.[name || ""] || (() => <DefaultComp name={name} icon={icon} />);
  return (
    <C.Container>
      <Comp />
    </C.Container>
  );
};
