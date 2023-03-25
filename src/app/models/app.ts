export interface Perfil {
  codigo: number | string;
  name: string;
}

export interface User {
  codigo: number | string;
  tema: number;
  listPerfil: Perfil[];
  perfil: number[];
  nome: string;
  email: string;
  foto: string;
  expira: string;
  empresa: string;
  logo: string;
  tipo: string;
  token: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Menu {
  data: MenuData[];
  object: MenuObject;
}

export interface MenuItemData {
  icone: string;
  label: string;
  rota: string;
}

export interface MenuData {
  icone?: string;
  label: string;
  rota?: string;
  itens?: MenuItemData[];
}

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
