import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorActionsComponent } from './calculator-actions.component';

describe('CalculatorActionsComponent', () => {
  let component: CalculatorActionsComponent;
  let fixture: ComponentFixture<CalculatorActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
