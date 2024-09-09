import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrls: [
    './my-skills.component.scss',
    './my-skills.media.component.scss',
    './my-skills.media2.component.scss',
    './my-skills.media3.component.scss'

  ]
})
export class MySkillsComponent {

}
