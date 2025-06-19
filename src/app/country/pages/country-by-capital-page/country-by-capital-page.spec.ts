import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryByCapitalPage } from './country-by-capital-page';

describe('CountryByCapitalPage', () => {
  let component: CountryByCapitalPage;
  let fixture: ComponentFixture<CountryByCapitalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryByCapitalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryByCapitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
