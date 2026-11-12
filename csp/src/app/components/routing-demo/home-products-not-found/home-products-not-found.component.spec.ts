import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsNotFoundComponent } from './home-products-not-found.component';

describe('HomeProductsNotFoundComponent', () => {
  let component: HomeProductsNotFoundComponent;
  let fixture: ComponentFixture<HomeProductsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProductsNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
