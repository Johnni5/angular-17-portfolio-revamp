import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    NgClass,
    NgFor
  ],
  templateUrl: './my-skills.component.html',
  styleUrls: [
    './my-skills.component.scss',
    './my-skills.media.component.scss',
    './my-skills.media2.component.scss',
    './my-skills.media4.component.scss',
  ] 
})

export class MySkillsComponent {

  lang: string;

  

  skills = [
    {
      path: 'angular',
      name: 'Angular'
    },
    {
      path: 'typescript',
      name: 'TypeScript'
    },
    {
      path: 'javascript',
      name: 'JavaScript'
    },
    {
      path: 'html',
      name: 'HTML'
    },
    {
      path: 'css',
      name: 'CSS'
    },
    {
      path: 'firebase',
      name: 'Firebase'
    },
    {
      path: 'git',
      name: 'Git'
    },
    {
      path: 'scrum',
      name: 'Scrum'
    },
    // {
    //   path: 'api',
    //   name: 'Rest-Api'
    // },
    {
      path: 'material',
      name: 'Material-Design'
    },
    {
      path: 'linux',
      name: 'Linux'
    },
    {
      path: 'docker',
      name: 'Docker'
    },
    {
      path: 'vue',
      name: 'Vue'
    },
    {
      path: 'python',
      name: 'Python'
    },
    {
      path: 'cloud',
      name: 'Cloud'
    },
  ];

  constructor(
    public translate: TranslateService,
  ) {
    this.lang = '';
    translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
    });

  }

  skillAni(id: string) {
    if (!window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      document.getElementById(id)?.classList.add('skillAni');
      setTimeout(() => {
        document.getElementById(id)?.classList.remove('skillAni');
      }, 600);
    }
  }
}
