import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme-data',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './aboutme-data.component.html',
  styleUrls: [
    './aboutme-data.component.scss',
    './aboutme-data.component.media.scss'
  ]
})
export class AboutmeDataComponent {

}
