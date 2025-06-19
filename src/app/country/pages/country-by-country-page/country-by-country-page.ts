import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country-service';
import { catchError, of, tap, throwError } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'
import { Country } from '../../interfaces/country.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'country-by-country-page',
  imports: [CountrySearchInput, CountryList, JsonPipe],
  templateUrl: './country-by-country-page.html',
  styleUrl: './country-by-country-page.css'
})
export class CountryByCountryPage  {

  private readonly countryServive = inject(CountryService);

  query = signal<string>('');


  countryResource = rxResource<Country[], {query: string}>({
    params: () => ( {query: this.query()}),
    
    stream: ({params}) => {
      const querySearch = params.query;
      
      return querySearch
    ? this.countryServive.searchByCountry(querySearch).pipe(
        tap(() => console.log('Petición exitosa')),
        catchError(err => {
          console.error('Error capturado en rxResource:', err.message);
          return throwError(() => err);
        })
      ): of([]);

    },

    defaultValue: [],


  });

  errorSignal = signal<string | undefined>(undefined);

 constructor() {
    // Cada vez que cambie el error en countryResource, actualiza prueba y haz log
    effect(() => {
      const err = this.countryResource.error();
      this.errorSignal.set(err?.message); // solo el mensaje
    });
  }

}
