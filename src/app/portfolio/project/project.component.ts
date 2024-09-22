import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NgStyle, NgClass, TranslateModule],
  templateUrl: './project.component.html',
  styleUrls: [
    './project.component.scss',
    './project.component.media.scss'
  ]
})
export class ProjectComponent {
  @Input() project = {
    name: '',
    path: '',
    number: '',
    tools: '',
    link: '',
    github: ''
  }; 

  @Input() index = 0;

}
