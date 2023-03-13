import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() title: string = '';
  @Input() logo: string = '';

  copy: string = 'Copyright ©';
  year: number = new Date().getFullYear();
  rights: string = 'Todos os direitos reservados';
}
