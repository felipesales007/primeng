import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MenuObject } from 'src/app/models/components/layout/navbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() name: string = ''; // Nome do usuário
  @Input() title: string = ''; // Título
  @Input() logo: string = ''; // Logomarca da empresa
  @Input() photo: string = ''; // Foto do usuário
  @Input() sidebarTitle: string = ''; // Título do menu lateral
  @Input() sidebarLogo: string = ''; // Logomarca da empresa
  @Input() sidebarFooterTitle: string = ''; // Título do menu lateral no rodapé
  @Input() sidebarFooterLogo: string = ''; // Logomarca da empresa no rodapé
  @Input() sidebarItems: any[] = []; // Dados de navegação do menu lateral
  @Input() sidebarItemsObject: MenuObject = {
    icon: 'icon',
    label: 'label',
    to: 'to',
    command: 'command',
    url: 'url',
    items: 'items',
    separator: 'separator',
    disabled: 'disabled',
    visible: 'visible',
  }; // Objetos dos dados de navegação do menu lateral

  @Output() sidebar: EventEmitter<any> = new EventEmitter();
  @ViewChild('theme') theme!: any;
  @ViewChild('user') user!: any;

  constructor(private router: Router) {}

  state: boolean = true;
  menuUser: any[] = [
    {
      label: 'Perfil',
      icon: 'pi pi-user',
      styleClass: 'layout-navbar',
      command: () => this.router.navigate(['/']),
    },
    {
      label: 'Contato',
      icon: 'pi pi-envelope',
      styleClass: 'layout-navbar',
      command: () => this.router.navigate(['/']),
    },
    {
      separator: true,
    },
    {
      label: 'Sair',
      icon: 'pi pi-sign-out',
      styleClass: 'layout-navbar logout',
      command: () => this.router.navigate(['/sair']),
    },
  ];
  menuTheme: any[] = [
    {
      label: 'Claro',
      icon: 'pi pi-sun',
      class: 'layout-navbar theme navbar-theme-1',
      command: () => null,
    },
    {
      label: 'Escuro',
      icon: 'pi pi-moon',
      class: 'layout-navbar theme navbar-theme-2',
      command: () => null,
    },
    {
      label: 'Sistema',
      icon: 'pi pi-cog',
      class: 'layout-navbar theme navbar-theme-3',
      command: () => null,
    },
  ];

  iconTheme(): string {
    // if (this.userTheme === 1) {
    //   return 'pi pi-sun';
    // } else if (this.userTheme === 2) {
    //   return 'pi pi-moon';
    // }

    return 'pi pi-cog';
  }

  toggleUser(event: any): void {
    this.user?.toggle(event);
  }

  toggleTheme(event: any): void {
    const theme = this.theme;
    theme?.toggle(event);

    setTimeout(() => {
      const toggle = theme.container;

      if (toggle) {
        // const item = toggle.querySelector(`.navbar-theme-${this.userTheme || 1}`);
        const item = toggle.querySelector(`.navbar-theme-1`);
        item?.classList.add(...['surface-hover', 'p-disabled']);
      }
    });
  }

  clickSidebar(command: string, data: any): void {
    this.sidebar.emit({ command, data });
  }
}
