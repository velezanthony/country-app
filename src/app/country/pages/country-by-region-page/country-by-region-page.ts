import { Component, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-by-region-page',
  imports: [CountryList],
  templateUrl: './country-by-region-page.html',
  styleUrl: './country-by-region-page.css'
})
export class CountryByRegionPage {
  
  countries = signal<Country[]>([]);

}
