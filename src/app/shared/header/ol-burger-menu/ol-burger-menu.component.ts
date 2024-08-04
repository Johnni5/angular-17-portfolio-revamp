import { CommonModule, NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ol-burger-menu',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './ol-burger-menu.component.html',
  styleUrl: './ol-burger-menu.component.scss'
})

export class OlBurgerMenuComponent {

  @Output() closeMenuEvent = new EventEmitter<void>();

  closeMenu() {
    this.closeMenuEvent.emit();
  }


}
