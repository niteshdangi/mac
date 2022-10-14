import React, { useRef } from "react";
import * as C from "./styles";
import * as uuid from "uuid";
import { WindowComponent } from "./components/WindowComponent";

import Draggable from "react-draggable";
import {
  addWindow,
  focusWindow,
  removeWindow,
  selectCurrentWindow,
} from "../../global-state";
import { useDispatch, useSelector } from "react-redux";
import { IWindow } from "../../interface";

const Window = ({ name, id, icon }: IWindow) => {
  const currentWindow = useSelector(selectCurrentWindow);
  const dispatch = useDispatch();
  const closeWindow = (e: any) => {
    e?.stopPropagation?.();
    if (id === currentWindow?.id) {
      dispatch(focusWindow({ name: null, id: null }));
    }
    dispatch(removeWindow(id));
  };
  const handleFocus = () => {
    dispatch(focusWindow({ id, name }));
  };
  const classId = useRef("drag" + uuid.v4());

  return (
    <C.WindowContainer id={"window-" + id}>
      <Draggable
        bounds={{ top: 0 }}
        defaultPosition={{
          x: -window.innerWidth / 4,
          y: 20,
        }}
        handle={"." + classId.current}
      >
        <C.Container
          className={currentWindow?.id === id ? "focused" : ""}
          id={"window-container-" + id}
          onClick={handleFocus}
        >
          <C.Top className={classId.current}>
            <div className="window-btn close" onClick={closeWindow}>
              <img src={`/assets/images/icons/window/close.png`} alt="" />
            </div>
            <div className="window-btn minimize" onClick={closeWindow}>
              <img src={`/assets/images/icons/window/minimize.png`} alt="" />
            </div>
          </C.Top>

          <C.Body>
            {name !== "none" && (
              <WindowComponent name={name} id={id} icon={icon} />
            )}
          </C.Body>
        </C.Container>
      </Draggable>
    </C.WindowContainer>
  );
};
export default Window;
