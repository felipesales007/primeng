import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, RippleModule, ButtonModule, MenubarModule],
  exports: [BrowserAnimationsModule, RippleModule, ButtonModule, MenubarModule],
})
export class PrimeModule {}
