import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1'
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);


  constructor() { }


  searchByCapital( query: string ): Observable<Country[]>{
    const lowerCaseQuery = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${lowerCaseQuery}`)
    .pipe(
      map( restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
      catchError(error =>{
        console.log("Error fetching", error);

        return throwError(() => new Error(`No se pudo obtener países con ese query: ${query}`));
      })
    );
  }

  searchByCountry( query: string ): Observable<Country[]>{
    const lowerCaseQuery = query.toLocaleLowerCase();
    
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${lowerCaseQuery}`)
    .pipe(
      map( restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries) ),
      delay(3000),
      catchError(error => {
        console.log("Error fetching", error);
        return throwError(() => new Error(`No se pudo encontrar el país con esa query ${query}`));
      })
    );
  }
  
  searchCountryByAlphaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(
          () => new Error(`No se pudo obtener países con ese código ${code}`)
        );
      })
    );
  }

}
