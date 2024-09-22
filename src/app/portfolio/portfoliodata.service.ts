import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {

  constructor() { }

  projectlist = [
    {
      name: 'Join',
      path: 'join',
      number: '01',
      tools: 'JavaScript | HTML | CSS | Firebase',
      link: 'https://johnni5.github.io/javascript-join/html/board.html',
      github: 'https://github.com/Johnni5/javascript-join'
    },
    {
      name: 'Pokedex',
      path: 'pokedex',
      number: '02',
      tools: 'JavaScript | HTML | CSS | API',
      link: 'https://johnni5.github.io/javascript-pokedex-api/',
      github: 'https://github.com/Johnni5/javascript-pokedex-api'
    },
    {
      name: 'Rolodeck',
      path: 'rolodeck',
      number: '03',
      tools: 'React | JavaScript | HTML | CSS',
      link: 'https://johnni5.github.io/react-rolodex/',
      github: 'https://github.com/Johnni5/react-rolodex'
    },
    {
      name: 'Pollo Loco',
      path: 'pollo',
      number: '04',
      tools: 'JavaScript | HTML | CSS',
      link: 'https://johnni5.github.io/javascript-pollo-loco-final/',
      github: 'https://github.com/Johnni5/javascript-pollo-loco-final'
    },
    {
      name: 'Kanban',
      path: 'kanban',
      number: '05',
      tools: 'Angular 18 | JavaScript | HTML | SCSS',
      link: 'https://johannes-kaeppler.dev/kanban/index.html',
      github: 'https://github.com/Johnni5/angular-18-kanban-board',
    },
    {
      name: 'Chat App',
      path: 'chatapp',
      number: '06',
      tools: 'React | JavaScript | Firebase | SCSS',
      link: '',
      github: '',
    },
  ];
}
