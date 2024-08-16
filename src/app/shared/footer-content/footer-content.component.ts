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
  styleUrl: './footer-content.component.scss'
})
export class FooterContentComponent {

}
