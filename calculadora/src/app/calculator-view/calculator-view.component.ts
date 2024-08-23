import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-view',
  standalone: true,
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.css']
})
export class CalculatorViewComponent {
  @Input() valor1!: number;
  @Input() valor2!: number;
  @Input() resultado!: number;

  @Output() valor1Change = new EventEmitter<number>();
  @Output() valor2Change = new EventEmitter<number>();

  onValor1Change(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    this.valor1Change.emit(value);
  }

  onValor2Change(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    this.valor2Change.emit(value);
  }
}
