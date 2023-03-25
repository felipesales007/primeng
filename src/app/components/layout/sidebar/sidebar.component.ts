import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Menu, MenuObject } from 'src/app/models/components/layout/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() state: boolean = false; // Abertura e fechamento
  @Input() title: string = ''; // Título
  @Input() logo: string = ''; // Logomarca da empresa
  @Input() footerTitle: string = ''; // Título do menu lateral no rodapé
  @Input() footerLogo: string = ''; // Logomarca da empresa no rodapé
  @Input() items: any[] = []; // Dados de navegação
  @Input() object: MenuObject = {
    icon: 'icon',
    label: 'label',
    to: 'to',
    command: 'command',
    url: 'url',
    items: 'items',
    separator: 'separator',
    disabled: 'disabled',
    visible: 'visible',
  }; // Objetos dos dados de navegação

  @Output() clickSidebar: EventEmitter<any> = new EventEmitter();

  visible: boolean = false;
  model: any[] = [];

  ngOnInit(): void {
    this.list(this.items);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const name in changes) {
      const item = changes[name];
      const init = item.firstChange;
      const value = item.currentValue;

      if (name === 'state' && !init) {
        this.visible = true;
        this.collapse();
      }

      if (name === 'items' && value && !value.length) this.list(value);
    }
  }

  close(command: string, data: any): void {
    this.visible = false;
    this.clickSidebar.emit({ command, data });
  }

  list(data: any[]): void {
    data?.forEach((item: any) => {
      if (item[this.object.items]) {
        this.model.push({
          icon: item[this.object.icon] ? `pi pi-fw pi-${item[this.object.icon]}` : '',
          label: item[this.object.label],
          disabled: item[this.object.disabled],
          visible: item[this.object.visible],
          items: item[this.object.items].map((sub: any) => {
            if (sub[this.object.to]) {
              return this.type('to', sub);
            } else if (sub[this.object.command]) {
              return this.type('command', sub);
            } else if (sub[this.object.url]) {
              return this.type('url', sub);
            }

            return {};
          }),
        } as Menu);
      } else if (item[this.object.to]) {
        this.model.push(this.type('to', item));
      } else if (item[this.object.command]) {
        this.model.push(this.type('command', item));
      } else if (item[this.object.url]) {
        this.model.push(this.type('url', item));
      } else if (item[this.object.separator]) {
        this.model.push({ separator: true } as any);
      }
    });
  }

  type(type: string, data: any): any {
    if (type === 'to') {
      return {
        icon: data[this.object.icon] ? `pi pi-fw pi-${data[this.object.icon]}` : '',
        label: data[this.object.label],
        disabled: data[this.object.disabled],
        visible: data[this.object.visible],
        routerLink: data[this.object.to],
        routerLinkActiveOptions: { exact: true },
        command: () => this.close(data[this.object.to], data),
      };
    } else if (type === 'command') {
      return {
        icon: data[this.object.icon] ? `pi pi-fw pi-${data[this.object.icon]}` : '',
        label: data[this.object.label],
        disabled: data[this.object.disabled],
        visible: data[this.object.visible],
        command: () => this.close(data[this.object.command], data),
      };
    } else if (type === 'url') {
      return {
        icon: data[this.object.icon] ? `pi pi-fw pi-${data[this.object.icon]}` : '',
        label: data[this.object.label],
        disabled: data[this.object.disabled],
        visible: data[this.object.visible],
        url: data[this.object.url],
        command: () => this.close(data[this.object.url], data),
      };
    }

    return {};
  }

  collapse(): void {
    const active = '.sidebar .p-menuitem-link.p-menuitem-link-active';

    setTimeout(() => {
      const collpase = document.querySelector<any>(active);
      const open = collpase?.parentElement.querySelector('[tabindex="0"]');

      if (collpase && !open) {
        const submenu = collpase.parentElement.parentElement.parentElement;
        const menu = submenu.parentElement.parentElement.parentElement;
        const item = menu?.querySelector('.p-menuitem-text');
        if (item) item.click();
      }
    });
  }
}
