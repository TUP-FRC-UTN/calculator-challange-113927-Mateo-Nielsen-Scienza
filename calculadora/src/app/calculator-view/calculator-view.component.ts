import { Component } from '@angular/core';
import { CalculatorActionsComponent } from '../calculator-actions/calculator-actions.component';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  imports: [CalculatorActionsComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css'
})
export class CalculatorViewComponent {

}
