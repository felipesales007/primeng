import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeModule } from './prime.module';

import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, InicioComponent, SobreComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, PrimeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
