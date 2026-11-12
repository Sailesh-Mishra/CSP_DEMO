import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirddChildComponent } from './thirdd-child.component';

describe('ThirddChildComponent', () => {
  let component: ThirddChildComponent;
  let fixture: ComponentFixture<ThirddChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirddChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirddChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
