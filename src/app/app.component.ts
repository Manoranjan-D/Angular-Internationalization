import { Component } from '@angular/core';
import { TranslationService } from './service/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private trnaslationService: TranslationService) {}

  onChangeLnguage(type: string) {
    this.trnaslationService.changeLanguage(type);
  }
}
