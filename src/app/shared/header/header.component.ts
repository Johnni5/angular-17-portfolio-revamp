import { Component, NgModule } from '@angular/core';
import { OlBurgerMenuComponent } from './ol-burger-menu/ol-burger-menu.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, OlBurgerMenuComponent, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})


export class HeaderComponent {
  
  lang:string = '';

  isMenuOpen = false;

  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  menuVisible = false;
  
  toggleOverlay() {
    console.log('toggleOverlay PRE: ', this.menuVisible);
    this.menuVisible = !this.menuVisible;
    console.log('toggleOverlay POST: ', this.menuVisible);
  }

  closeMenu() {
    console.log('close menu: ', this.menuVisible);
    this.menuVisible = false;
  }

  // closeOverlay() {
  //   this.menuVisible = false;
  // }
  
  changeLanguage(language: string) {
    // console.log(language);
    this.translate.use(language);
  }

}
