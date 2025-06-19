import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { CountryByCapitalPage } from './pages/country-by-capital-page/country-by-capital-page';
import { CountryByRegionPage } from './pages/country-by-region-page/country-by-region-page';
import { CountryPage } from './pages/country-page/country-page';
import { CountryByCountryPage } from './pages/country-by-country-page/country-by-country-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: CountryByCapitalPage,
      },
      {
        path: 'by-country',
        component: CountryByCountryPage,
      },
      {
        path: 'by-region',
        component: CountryByRegionPage,
      },

      {
        path: 'by/:code',
        component: CountryPage,
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
