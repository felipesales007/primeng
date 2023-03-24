import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule,
    AvatarModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
  ],
  exports: [
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule,
    AvatarModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
  ],
})
export class PrimeModule {}
