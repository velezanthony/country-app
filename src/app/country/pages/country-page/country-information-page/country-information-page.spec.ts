import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInformationPage } from './country-information-page';

describe('CountryInformationPage', () => {
  let component: CountryInformationPage;
  let fixture: ComponentFixture<CountryInformationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryInformationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
