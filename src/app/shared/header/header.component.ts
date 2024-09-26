import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss', 
    './header.component.media1.scss', 
    './header.component.media2.scss', 
    './ol-media.component.scss', 
    './ol-style.component.scss'
  ]

})


export class HeaderComponent {
  
  lang:string = '';
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  menuVisible = false;
  
  toggleOverlay() {
    // console.log('toggleOverlay PRE: ', this.menuVisible);
    this.menuVisible = !this.menuVisible;
    // console.log('toggleOverlay POST: ', this.menuVisible);
  }

  closeMenu() {
    // console.log('close menu: ', this.menuVisible);
    this.menuVisible = false;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
