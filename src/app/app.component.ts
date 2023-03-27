import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Company, Menu, User } from './models/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  page: boolean = true;
  user: User = {
    codigo: 1,
    tema: 1,
    listPerfil: [],
    perfil: [],
    nome: 'Felipe',
    email: 'felipesales007@hotmail.com',
    foto: 'https://xsgames.co/randomusers/avatar.php?g=male',
    expira: '2025-12-31',
    empresa: 'Zen Digital',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
    tipo: '',
    token: '',
  };
  company: Company = {
    name: 'Projeto',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
  };
  menu: Menu = {
    data: [
      {
        label: 'Início',
        icone: 'home',
        rota: '/',
      },
      {
        label: 'Sobre',
        icone: 'book',
        rota: '/sobre',
      },
    ],
    object: {
      icon: 'icone',
      label: 'label',
      disabled: 'desabilitado',
      visible: 'visivel',
      to: 'rota',
      command: 'executar',
      url: 'url',
      items: 'itens',
      separator: 'linha',
    },
  };

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
