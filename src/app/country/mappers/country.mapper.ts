import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class CountryMapper{

    static mapRestCountryToCountry(restCountry:RESTCountry): Country{
        const country: Country = {
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagSvg: restCountry.flags.svg,
            flagSvgAlt: restCountry.flags.alt,
            name: restCountry.name.common,
            capital: restCountry.capital[0],
            population: restCountry.population,
            nameSpanish: restCountry.translations["spa"].common
        }

        return country;
    }

    static mapRestCountryArrayToCountryArray(restCountries:RESTCountry[]):Country[]{
        const countries:Country[] = [];
        
        restCountries.forEach(restCountry => {
            const country =  this.mapRestCountryToCountry(restCountry);
            countries.push(country);
        });

        return countries

    } 
}