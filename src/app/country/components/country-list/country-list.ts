import { Component, effect, input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {

  countries = input.required<Country[]>();

  errorMessage = input<string |null | unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);

    constructor() {
    // Detecta cambios en errorMessage() y reacciona
    effect(() => {
      const error = this.errorMessage();
      if (error) {
        console.log('Error detectado en CountryList:', error);
        // Puedes hacer más acciones aquí, como emitir eventos o actualizar señales internas
      }
    });

    effect(() => {
      const countries = this.countries();
      if (countries) {
        console.log('countries detectado en CountryList:', countries);
        // Puedes hacer más acciones aquí, como emitir eventos o actualizar señales internas
      }
    });
  }

}
