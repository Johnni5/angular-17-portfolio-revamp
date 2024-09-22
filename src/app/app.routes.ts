import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalComponent } from './legal/legal.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'imprint/legal', component: LegalComponent },
  { path: 'legal/imprint', component: ImprintComponent },
];
