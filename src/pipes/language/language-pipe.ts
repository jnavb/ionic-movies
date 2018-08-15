import { Pipe, PipeTransform } from '@angular/core';
import { LANGUAGES } from '../../models/lang.js'

@Pipe({
  name: 'languagePipe',
})
export class LanguagePipe implements PipeTransform {
  transform(value: string, ...args) {
    return LANGUAGES.hasOwnProperty(value) ? LANGUAGES[value] 
    																			 : value;
  }
}
