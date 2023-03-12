import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, RippleModule, ButtonModule],
  exports: [BrowserAnimationsModule, RippleModule, ButtonModule],
})
export class PrimeModule {}
