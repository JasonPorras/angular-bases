import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: "",
    power: 0
  };

  // Función para limpiar los campos
  private resetCharacter(): void {
    this.character = {
      name: '',
      power: 0
    };
  }

  // Función para mostrar el mensaje de alerta y limpiar
  private showAlert(message: string): void {
    alert(message);
    this.resetCharacter();
  }

  emitCharacter(): void {
    console.log(this.character);

    // Validaciones
    if (this.character.name.length === 0) {
      this.showAlert('Nombre no puede estar vacío');
      return;
    }

    if (this.character.power <= 0) {
      this.showAlert('Poder debe ser mayor a 0');
      return;
    }

    // Emitir el evento solo si ambas validaciones pasaron
    this.onNewCharacter.emit(this.character);
    alert('Personaje agregado');

    // Limpiar los campos después de emitir el evento
    this.resetCharacter();
  }
}
