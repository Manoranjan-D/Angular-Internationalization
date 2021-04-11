import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translateService: TranslateService) {}

  public changeLanguage(type: string) {
    this.translateService.use(type);
  }
}
