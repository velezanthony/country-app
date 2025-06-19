import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryService } from '../../services/country-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'country-by-capital-page',
  imports: [CountryList, CountrySearchInput],
  templateUrl: './country-by-capital-page.html',
  styleUrl: './country-by-capital-page.css'
})
export class CountryByCapitalPage {

  private readonly countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = resource({
    // Esto es reactivo al valor de `query`
    params: () => ({ query: this.query() }),

    // Este loader se ejecuta cuando `query` cambia
    loader: async ({ params }) => {
      if (!params.query) return [];

      // Usa `this.countryService` de forma segura
      return await firstValueFrom(
        this.countryService.searchByCapital(params.query)
      );
    }
  });

  
  // isLoading = signal<boolean>(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if( this.isLoading() ) return;
    
  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //  this.countryService.searchByCapital(query)
  //  .subscribe({
  //   next: ( countries ) =>{
  //     this.isLoading.set(false);
  //     this.countries.set(countries);
  //   },
  //   error: ( err ) =>{
  //     this.isLoading.set(false);
  //     this.countries.set([]);
  //     this.isError.set(err);
  //   }
  //  });
  
  // }

}
