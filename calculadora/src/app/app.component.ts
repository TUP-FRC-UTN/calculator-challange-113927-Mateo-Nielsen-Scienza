import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorActionsComponent } from './calculator-actions/calculator-actions.component';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}
