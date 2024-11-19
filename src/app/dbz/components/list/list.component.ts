import { Character } from './../../interfaces/character.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Output()
  public onByOrder: EventEmitter<Character[]> = new EventEmitter();

  deleteCharacterById( id:string ): void {
    console.log(id);
    this.onDelete.emit(id);
  }

  onByOrderName(): void {
    this.onByOrder.emit(this.characterList);
  }
}
