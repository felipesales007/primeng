import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  header = {
    title: 'Início',
  };
  welcome = {
    title: 'Bem vindo',
    description:
      'Ao seu painel administrativo da Administrativo, aqui você pode gerenciar sua empresa de forma simples e rápida.',
    image: 'https://uploaddeimagens.com.br/images/004/406/698/original/welcome.png',
  };
}
