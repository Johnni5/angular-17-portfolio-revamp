import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { CommonModule } from '@angular/common';
import { ArrowLeftComponent } from '../shared/arrow-left/arrow-left.component';
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { ArrowRightComponent } from "../shared/arrow-right/arrow-right.component";
import { MyPortfolioComponent } from "../my-portfolio/my-portfolio.component";
import { ArrowLeft2Component } from '../shared/arrow-left-2/arrow-left-2.component';
import { FooterContentComponent } from "../shared/footer-content/footer-content.component";
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutMeComponent,
    ArrowLeftComponent,
    MySkillsComponent,
    ArrowRightComponent,
    MyPortfolioComponent,
    ArrowLeft2Component,
    FooterContentComponent,
    TranslateModule
  ],
  templateUrl: './main-page.component.html',
  styleUrls: [
    './main-page.component.scss', 
    './main-page.responsive.scss',
    './main-page.responsive2.scss',
  ],
  
})


export class MainPageComponent {


  
}
