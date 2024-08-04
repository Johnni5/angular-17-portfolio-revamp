import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../interfaces/projects.interface';

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss'
})
export class MyPortfolioComponent {

  trackByFn(index: number, project: any): any {
    return project.id; 
  }

  projects : Project[] = [
    {
      image: '../../../assets/icons/projects/join.png',
      title: 'Join',
      stack: ['JavaScript | HTML | CSS | Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkGh: 'http://www.github.com',
      linkLi: ''
    },
    {
      image: '../../../assets/icons/projects/pokedex.png',
      title: 'Pokedex',
      stack: ['JavaScript | HTML | CSS | API'],
      description: 'Based on the PokéAPI, a simple library that provides and catalogues pokemon information.',
      linkGh: 'http://www.github.com',
      linkLi: ''
    },
    {
      image: '../../../assets/icons/projects/react-rolodeck.png',
      title: 'Rolodeck',
      stack: ['React | JavaScript | HTML | CSS'],
      description: 'Robot-Rolodeck is a React-based application that allows users to create and manage a virtual robot collection.',
      linkGh: 'https://github.com/Johnni5/react-rolodex',
      linkLi: 'https://johnni5.github.io/react-rolodex/'
    },
    {
      image: '../../../assets/icons/projects/el-pollo-01.png',
      title: 'El Pollo Loco',
      stack: ['JavaScript | HTML | CSS'],
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and spicy bottles to fight against the mad boss chicken..',
      linkGh: 'http://www.github.com',
      linkLi: ''
    },
  ]
  
}
