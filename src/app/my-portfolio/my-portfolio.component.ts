import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../interfaces/projects.interface';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './my-portfolio.component.html',
  styleUrls: [
    './my-portfolio.component.scss',
    './my-portfolio.media.component.scss',
    './my-portfolio.media2.component.scss'
  ]
})
export class MyPortfolioComponent {

  trackByFn(index: number, project: any): any {
    return project.id; 
  }

  projects : Project[] = [
    {
      image: './assets/icons/projects/join.png',
      title: 'Join',
      stack: ['JavaScript | HTML | CSS | Firebase'],
      projectDescription: 'PROJECT_JOIN_DESCRI',
      linkGh: 'https://github.com/Johnni5/javascript-join',
      linkLi: 'https://johnni5.github.io/javascript-join/html/board.html'
    },
    {
      image: './assets/icons/projects/pokedex.png',
      title: 'Pokedex',
      stack: ['JavaScript | HTML | CSS | API'],
      projectDescription: 'PROJECT_POKE_DESCRI',
      linkGh: 'https://github.com/Johnni5/javascript-pokedex-api',
      linkLi: 'https://johnni5.github.io/javascript-pokedex-api/'
    },
    {
      image: './assets/icons/projects/react-rolodeck.png',
      title: 'Rolodeck',
      stack: ['React | JavaScript | HTML | CSS'],
      projectDescription: 'PROJECT_ROBO_DESCRI',
      linkGh: 'https://github.com/Johnni5/react-rolodex',
      linkLi: 'https://johnni5.github.io/react-rolodex/'
    },
    {
      image: './assets/icons/projects/el-pollo-01.png',
      title: 'Pollo Loco',
      stack: ['JavaScript | HTML | CSS'],
      projectDescription: 'PROJECT_POLLO_DESCRI',
      linkGh: 'https://github.com/Johnni5/javascript-pollo-loco-final',
      linkLi: 'https://johnni5.github.io/javascript-pollo-loco-final/'
    },
    {
      image: './assets/icons/projects/kanban-user.png',
      title: 'Kanban',
      stack: ['Angular |JavaScript | HTML | CSS'],
      projectDescription: 'PROJECT_KANBAN_DESCRI',
      linkGh: 'https://github.com/Johnni5/angular-18-kanban-board',
      linkLi: 'https://johannes-kaeppler.dev/kanban/index.html'
    },
  ]
  
  // pojectDescriptions = [
  //   'PROJECT_JOIN_DESCR',
  //   'PROJECT_POKE_DESCR',
  //   'PROJECT_ROBO_DESCR',
  //   'PROJECT_POLLO_DESCR',
  //   'PROJECT_KANBAN_DESCRI',
  // ];
}
