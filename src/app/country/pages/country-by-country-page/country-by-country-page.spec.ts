import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryByCountryPage } from './country-by-country-page';

describe('CountryByCountryPage', () => {
  let component: CountryByCountryPage;
  let fixture: ComponentFixture<CountryByCountryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryByCountryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryByCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
