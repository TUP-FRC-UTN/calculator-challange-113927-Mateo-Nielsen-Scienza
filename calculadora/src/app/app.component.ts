import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorActionsComponent } from './calculator-actions/calculator-actions.component';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorViewComponent, CalculatorActionsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  calcular(operador: string) {
    switch (operador) {
      case '+':
        this.resultado = this.valor1 + this.valor2;
        break;
      case '-':
        this.resultado = this.valor1 - this.valor2;
        break;
      case '*':
        this.resultado = this.valor1 * this.valor2;
        break;
      case '/':
        this.resultado = this.valor1 / this.valor2;
        break;
      case '^':
        this.resultado = Math.pow(this.valor1, this.valor2);
        break;
      default:
        console.warn(`Operador no soportado: ${operador}`);
    }
  }

  limpiar() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }
}
