import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryByRegionPage } from './country-by-region-page';

describe('CountryByRegionPage', () => {
  let component: CountryByRegionPage;
  let fixture: ComponentFixture<CountryByRegionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryByRegionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryByRegionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
