import { Component } from '@angular/core';
import { AboutmeDataComponent } from "./aboutme-data/aboutme-data.component";
import { AboutmeImgComponent } from "./aboutme-img/aboutme-img.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AboutmeDataComponent, AboutmeImgComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
