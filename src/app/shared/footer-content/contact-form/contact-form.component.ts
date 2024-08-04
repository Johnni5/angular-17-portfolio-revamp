import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

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
      ngForm.resetForm();
    }
  }


  // onSubmit(ngForm:NgForm) {
    
  //   if (ngForm.valid && ngForm.submitted) {
  //     console.log(this.contactData);
        
  //   } else {
  //     // Display an error message or handle the validation error
  //     console.log('Nope..!');
  //   }
  // }
  
}
