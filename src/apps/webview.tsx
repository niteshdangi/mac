import React from "react";
interface IProps {
  src: string;
}
const WebView = ({ src }: IProps) => {
  return (
    <iframe
      src={src}
      style={{ width: "100%", height: "100%", border: "none" }}
    />
  );
};
export default WebView;
