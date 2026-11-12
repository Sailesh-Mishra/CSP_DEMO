import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDataFlowComponent } from './comp-data-flow.component';

describe('CompDataFlowComponent', () => {
  let component: CompDataFlowComponent;
  let fixture: ComponentFixture<CompDataFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompDataFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDataFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
