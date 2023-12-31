import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsViewComponent } from './country-details-view.component';

describe('CountryDetailsViewComponent', () => {
  let component: CountryDetailsViewComponent;
  let fixture: ComponentFixture<CountryDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryDetailsViewComponent]
    });
    fixture = TestBed.createComponent(CountryDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
