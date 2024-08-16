import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NgIf, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  accept = false;

  http = inject<any>(HttpClient);

  // if LIVE - set to FALSE
  //mailTest = true;

  contactData = {
    name: '',
    email: '',
    message: ''
  };
  
  post = {
    endPoint: 'https://johannes-kaeppler.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  // REMOVE MAILTEST - if LIVE
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            // EDIT for EXTRA
            console.log('worki worki');
            alert('Message sent. Thank you!');
            ngForm.resetForm();
          },
          error: (error: string) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      // TEST MODUS
      console.log('else -data: ', this.contactData);
      // EDIT for EXTRA
      alert('Message - NOT');
      ngForm.resetForm();
    }
  }

  
}
