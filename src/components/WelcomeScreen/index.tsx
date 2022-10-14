import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  guestUser,
  login,
  selectCurrentUser,
  selectUsers,
} from "../../global-state";
import { IUser } from "../../interface";
import AddUser from "../add-user";
import * as C from "./styles";

type Props = {
  fadeOut: boolean;
};
interface Prop extends IUser {
  selected?: string;
  onClick?: (x?: number, y?: number) => void;
  style?: object;
  isLoading?: boolean;
  setLoading?: (v: boolean) => void;
}

const User = (props: Prop) => {
  const [visible, setVisible] = useState(true);
  const pass = useRef("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.selected !== "non-selected") setVisible(true);
    else {
      setTimeout(() => {
        setVisible(false);
      }, 250);
    }
  }, [props.selected]);
  useEffect(() => {
    if (props.selected === "yes" && props.name === guestUser.name) {
      props.setLoading?.(true);
      setTimeout(() => {
        dispatch(login(props.name));
      }, 500);
    }
  }, [props.selected]);
  if (!visible) return null;
  return (
    <C.UserProfile
      {...props}
      id={"user-profile-" + props.name}
      onClick={() => {
        const elem = document.getElementById("user-profile-" + props.name);
        props.onClick?.(elem?.offsetLeft, elem?.offsetTop);
      }}
      className={"user-profile " + (props.selected || "")}
    >
      <img src={props?.image || guestUser.image} alt="user" />
      <span>{props.name}</span>
      {props.selected === "yes" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (props.password === pass.current) {
              props.setLoading?.(true);
              dispatch(login(props.name));
            } else {
              const elem = document.getElementById("user-login-password");
              elem?.classList.add("shake");
              setTimeout(() => {
                elem?.classList?.remove("shake");
              }, 500);
            }
          }}
        >
          {props.isLoading || props.name === guestUser.name ? (
            <img src="/assets/images/loading-96.gif" alt="loading" />
          ) : (
            <C.Password
              autoFocus
              id="user-login-password"
              onChange={(e) => {
                pass.current = e.target.value;
              }}
              type="password"
              placeholder="Enter Password"
            />
          )}
        </form>
      )}
    </C.UserProfile>
  );
};

export const WelcomeScreen = ({ fadeOut }: Props) => {
  const [isAdd, setAdd] = useState(false);
  const allUsers = useSelector(selectUsers);
  const currentUser = useSelector(selectCurrentUser);
  const [selectedProfile, setSelectedProfile] = useState<IUser | undefined>(
    currentUser
  );
  const [pos, setPos] = useState<number[]>([0, 0]);
  const [allVisible, setAllVisible] = useState(!selectedProfile?.name);
  const [isLoading, setLoading] = useState(false);
  const centerX = window.innerWidth / 2 - 62.5;
  const centerY = window.innerHeight / 2 - 150;
  useEffect(() => {
    if (selectedProfile?.name) {
      setTimeout(() => {
        setPos((p) => [centerX, centerY, ...p]);
        setAllVisible(false);
      }, 300);
    }
  }, [selectedProfile]);
  const back = () => {
    setPos((p) => [p?.[2] || centerX, p?.[3] || centerY]);
    setTimeout(() => {
      setAllVisible(true);
      setSelectedProfile(undefined);
    }, 300);
  };
  return (
    <C.Container fadeOut={fadeOut}>
      <div className="bg">
        <div className="content">
          {selectedProfile?.name && (
            <>
              <User
                style={{
                  left: pos[0],
                  top: pos[1],
                  position: "absolute",
                  margin: 0,
                  zIndex: 10,
                  transition: "all 0.3s linear",
                }}
                isLoading={isLoading}
                setLoading={setLoading}
                selected={pos[0] === centerX ? "yes" : ""}
                {...selectedProfile}
              />
            </>
          )}
          {allUsers.length === 1 && (
            <User
              style={{
                transition: "all 0.3s linear",
                opacity: allVisible ? 1 : 0,
              }}
              onClick={() => {
                setAdd(true);
              }}
              name="Add User"
              image="/assets/images/add.png"
              selected={!selectedProfile?.name ? "" : "non-selected"}
            />
          )}
          {allUsers.map((user) => {
            return (
              <User
                style={{
                  transition: "all 0.3s linear",
                  opacity: allVisible ? 1 : 0,
                }}
                onClick={(x, y) => {
                  setPos([x || 0, y || 0]);
                  setSelectedProfile(user);
                }}
                key={user.name}
                {...user}
                selected={!selectedProfile?.name ? "" : "non-selected"}
              />
            );
          })}
        </div>
        <C.Cancel
          onClick={back}
          style={{
            opacity: allVisible || isLoading ? 0 : 1,
            visibility: allVisible || isLoading ? "hidden" : "unset",
          }}
        >
          <div>
            <div>
              <div />
              <div />
            </div>
          </div>
          <span>Cancel</span>
        </C.Cancel>
      </div>
      {isAdd && <AddUser close={() => setAdd(false)} />}
    </C.Container>
  );
};
