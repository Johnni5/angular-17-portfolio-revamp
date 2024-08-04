import { Component } from '@angular/core';
import { OlBurgerMenuComponent } from './ol-burger-menu/ol-burger-menu.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, OlBurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  
  menuVisible = false;
  
  openOverlay() {
    this.menuVisible = !this.menuVisible;
  }

}
