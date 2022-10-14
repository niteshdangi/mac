import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuLeftItems } from "./data/MenuList/MenuLeftItems";
import { IMenu, IUser, IWindow } from "./interface";
import { RootState } from "./store";

interface GlobalState {
  windows: IWindow[];
  topLeftMenu: IMenu[];
  currentWindow: IWindow | null;
  users: IUser[];
  power: string;
}
export const guestUser: IUser = {
  name: "Guest User",
  image: "/assets/images/user-img.png",
  password: "12345678",
};
const initialState: GlobalState = {
  windows: [],
  topLeftMenu: MenuLeftItems,
  currentWindow: null,
  users: window.localStorage.getItem("users")
    ? JSON.parse(window.localStorage.getItem("users") || "")
    : [guestUser],
  // power: window.innerWidth < 1100 ? "size" : "off",
  power: "off",
};

export const globalSlice = createSlice({
  name: "global-state",
  initialState,
  reducers: {
    addWindow: (state, payload: PayloadAction<IWindow>) => {
      const existingWindow = state.windows.find(
        (w) => w.id === payload.payload.id
      );
      if (existingWindow) {
        if (existingWindow.id !== state.currentWindow?.id) {
          state.currentWindow = existingWindow;
        } else {
          document
            .getElementById("window-container-" + existingWindow.id)
            ?.classList.remove("blink");
          document
            .getElementById("window-container-" + existingWindow.id)
            ?.classList.add("blink");
        }
      } else {
        state.windows.push(payload.payload);
        state.currentWindow = payload.payload;
        const audio = new Audio("/assets/sounds/click.mp3");
        audio.currentTime = 1;
        audio.play();
      }
    },
    removeWindow: (state, payload) => {
      state.windows = state.windows.filter((w) => w.id !== payload.payload);
    },
    focusWindow: (state, payload) => {
      state.currentWindow = payload.payload;
    },
    addUser: (state, payload: PayloadAction<IUser>) => {
      state.users = [payload.payload, ...state.users];
      window.localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUser: (state, payload: PayloadAction<IUser>) => {
      state.users = state.users.map((u) =>
        u.name === payload.payload.name ? payload.payload : u
      );
      window.localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, payload: PayloadAction<string>) => {
      state.users = state.users.map((u) =>
        u.name === payload.payload ? { ...u, isLoggedIn: true } : u
      );
    },
    logout: (state) => {
      state.users = state.users.map((u) => ({ ...u, isLoggedIn: false }));
    },
    removeUser: (state, payload) => {
      state.users = state.users.filter((u) => u.name !== payload.payload);
      window.localStorage.setItem("users", JSON.stringify(state.users));
    },
    setPower: (state, payload) => {
      state.power = payload.payload;
      if (payload.payload === "reload") {
        window.location.reload();
      }
    },
  },
});

export const {
  removeWindow,
  addWindow,
  focusWindow,
  addUser,
  editUser,
  removeUser,
  login,
  logout,
  setPower,
} = globalSlice.actions;
export default globalSlice.reducer;
export const selectWindows = (state: RootState) => state.globalState.windows;
export const selectUsers = (state: RootState) => state.globalState.users;
export const selectPower = (state: RootState) => state.globalState.power;
export const selectCurrentUser = (state: RootState) =>
  state.globalState.users.find((u) => u.isLoggedIn);
export const selectCurrentWindow = (state: RootState) =>
  state.globalState.currentWindow;
