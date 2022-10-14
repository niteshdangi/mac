import React from "react";
import * as C from "./styles";

type Props = {
  icon: string;
  className?: string;
  onClick: (iconName: string) => void;
  onMouseEnter: () => void;
  label: string;
  isOpened?: boolean;
};

export const MenuIcon = ({
  icon,
  label,
  className,
  onClick,
  onMouseEnter,
  isOpened,
}: Props) => {
  return (
    <C.Container
      className={className}
      onMouseEnter={onMouseEnter}
      icon={icon}
      onClick={(e) => onClick(icon)}
    >
      <C.Toast>{label.replaceAll(" ", "")}</C.Toast>
      {isOpened && <C.Dot />}
    </C.Container>
  );
};
