import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactFormComponent],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.scss'
})
export class FooterContentComponent {

}
