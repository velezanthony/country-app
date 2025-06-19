import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTopMenu } from './country-top-menu';

describe('CountryTopMenu', () => {
  let component: CountryTopMenu;
  let fixture: ComponentFixture<CountryTopMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTopMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryTopMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
