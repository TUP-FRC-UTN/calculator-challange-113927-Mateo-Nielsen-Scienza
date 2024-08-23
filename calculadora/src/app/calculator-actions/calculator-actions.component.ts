import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-actions',
  standalone: true,
  templateUrl: './calculator-actions.component.html',
  styleUrls: ['./calculator-actions.component.css']
})
export class CalculatorActionsComponent {
  @Output() operacionSeleccionada = new EventEmitter<string>();
  @Output() limpiarSeleccion = new EventEmitter<void>();

  operacion(operador: string) {
    this.operacionSeleccionada.emit(operador);
  }

  limpiar() {
    this.limpiarSeleccion.emit();
  }
}
