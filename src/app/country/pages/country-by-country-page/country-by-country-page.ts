import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country-service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'

@Component({
  selector: 'country-by-country-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './country-by-country-page.html',
  styleUrl: './country-by-country-page.css'
})
export class CountryByCountryPage  {

  private readonly countryServive = inject(CountryService);

  query = signal<string>('');


  countryResource = rxResource({
    params: () => ( {query: this.query()}),
    
    stream: ({params}) => {
      const querySearch = params.query;
      
      return querySearch ? this.countryServive.searchByCountry(querySearch): of([]);
    },

    defaultValue: [],


  });

}
