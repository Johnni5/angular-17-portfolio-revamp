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
  styleUrls: [
    './contact-form.component.scss',
    './contact-form.media.component.scss',
  ] 
})
export class ContactFormComponent {

  sendText = 'SENDING - OK!';
  isButtonClicked = false;

  infoUser() {
    this.isButtonClicked = true;
    setTimeout(() => {
      this.isButtonClicked = false;
    }, 2000);
  }

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

  // #1 iteration
  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response: any) => {
  //           // EDIT for EXTRA
  //           console.log('worki worki');
  //           alert('Message sent. Thank you!');
  //           ngForm.resetForm();
  //         },
  //         error: (error: string) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.form.valid) {
  //     // TEST MODUS
  //     console.log('else -data: ', this.contactData);
  //     // EDIT for EXTRA
  //     alert('Message - NOT');
  //     ngForm.resetForm();
  //   }
  // }

  buttonText = 'SUBMIT_BTN_TXT';
  isSubmitting = false;

  // #2 iteration
  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid) {
  //     this.buttonText = 'SENDING - OK!';
  //     this.isSubmitting = true;
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response: any) => {
  //           console.log('worki worki');
  //           //alert('Message sent. Thank you!');
  //           ngForm.resetForm();
  //           setTimeout(() => {
  //             this.buttonText = 'SUBMIT_BTN_TXT';
  //             this.isSubmitting = false;
  //           }, 2000);
  //         },
  //         error: (error: string) => {
  //           console.error(error);
            
  //         },
  //         // complete: () => console.info('send post complete'),
  //       });
  //   }
  // }

  // #3 iteration
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      // this.buttonText = 'SENDING - OK!';
      // this.isSubmitting = true;
      // setTimeout(() => {
      //   this.buttonText = 'SUBMIT_BTN_TXT';
      //   this.isSubmitting = false;
      // }, 2000);
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            this.infoUser();
            // setTimeout(() => {
            //   this.buttonText = 'SUBMIT_BTN_TXT';
            //   this.isSubmitting = false;
            // }, 2000);
            // console.log('worki worki');
            //alert('Message sent. Thank you!');
            ngForm.resetForm();
          },
          error: (error: string) => {
            console.error(error);
          },
          //complete: () => console.info('send post complete'),
        });
    }
  }

}
