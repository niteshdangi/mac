export interface IWindow {
  id?: string;
  name?: string;
  icon?: string;
}
export interface IMenuOption {
  label: string;
  shortcut?: string;
  divider?: boolean;
  disabled?: boolean;
  right?: string;
  action?: (dispatch?: any) => void;
}
export interface IMenu {
  title: string;
  options: IMenuOption[];
}
export interface IUser {
  name: string;
  password?: string;
  isLoggedIn?: boolean;
  image?: string;
}
