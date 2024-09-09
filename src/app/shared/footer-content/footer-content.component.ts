import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from "../footer/footer.component";
import { ImprintComponent } from '../../imprint/imprint.component';

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent, TranslateModule, FooterComponent, ImprintComponent],
  templateUrl: './footer-content.component.html',
  styleUrls: [
    './footer-content.component.scss',
    './footer-content.media.component.scss',
    './footer-content.media2.component.scss'
  ]
})
export class FooterContentComponent {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
