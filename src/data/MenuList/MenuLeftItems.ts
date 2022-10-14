import { IMenu } from "../../interface";

export const MenuLeftItems: IMenu[] = [
  {
    title: "Finder",
    options: [
      { label: "About Finder", divider: true },
      { label: "Preferences...", divider: true },
      { label: "Empty Bin...", divider: true },
      { label: "Hide Finder" },
      { label: "Hide Others" },
      { label: "Show All" },
    ],
  },
  {
    title: "File",
    options: [
      { label: "New Folder Window" },
      { label: "New Folder" },
      { label: "New Folder with Selection", disabled: true },
      { label: "New Smart Folder" },
      { label: "New Tab" },
      { label: "Open", disabled: true },
      { label: "Open With", disabled: true },
      { label: "Close Window", disabled: true, divider: true },
      { label: "Get Info" },
      { label: "Rename", disabled: true },
    ],
  },
  {
    title: "Edit",
    options: [
      { label: "Undo", disabled: true },
      { label: "Redo", disabled: true, divider: true },
      { label: "Cut", disabled: true },
      { label: "Copy", disabled: true },
      { label: "Paste", disabled: true, divider: true },
      { label: "Select All" },
    ],
  },
  {
    title: "View",
    options: [
      { label: "as Icons", disabled: true },
      { label: "as List", disabled: true },
      { label: "as Columns", disabled: true },
      { label: "as Gallery", disabled: true, divider: true },
      { label: "Enter Full Screen" },
    ],
  },
  {
    title: "Go",
    options: [
      { label: "Back", disabled: true },
      { label: "Forward", disabled: true, divider: true },
      { label: "Go To Folder" },
      { label: "Connect to Server..." },
    ],
  },
  {
    title: "Window",
    options: [
      { label: "Minimize" },
      { label: "Zoom" },
      { label: "Move window to Left Side of Screen" },
      { label: "Move window to Right Side of Screen", divider: true },
      { label: "Bring all to front" },
    ],
  },
  {
    title: "Help",
    options: [
      { label: "macOS Help", divider: true },
      { label: "Github" },
      { label: "Portfolio" },
    ],
  },
];
