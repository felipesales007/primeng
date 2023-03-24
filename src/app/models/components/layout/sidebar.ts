export interface MenuObject {
  icon: string;
  label: string;
  to: string;
  command: string;
  url: string;
  items: string;
  separator: string;
  disabled: string;
  visible: string;
}

interface MenuItem {
  icon: string | Function;
  label: string;
  to: string;
  command: Function;
  url: string;
  disabled: boolean;
  visible: boolean;
}

export interface Menu {
  icon: string | Function;
  label: string;
  to: string;
  command: Function;
  url: string;
  items: MenuItem[];
  separator: boolean;
  disabled: boolean;
  visible: boolean;
}
