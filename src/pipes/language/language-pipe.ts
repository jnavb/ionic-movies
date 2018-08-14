import { Pipe, PipeTransform } from '@angular/core';
import { LANGUAGES } from '../../models/lang.js'

@Pipe({
  name: 'languagePipe',
})
export class LanguagePipe implements PipeTransform {
  transform(value: string, ...args) {
  	console.log('Pipe',value, LANGUAGES)
    return LANGUAGES.hasOwnProperty(value) ? LANGUAGES[value] 
    																: value;
  }
}
