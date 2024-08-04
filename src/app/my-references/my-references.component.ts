import { Component } from '@angular/core';
import { Reference } from '../interfaces/references.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-references.component.html',
  styleUrl: './my-references.component.scss'
})
export class MyReferencesComponent {

  references: Reference[] = [
    {
      image: '../../assets/icons/format_quote.png',
      name: 'V. Schuster',
      title: 'Team Partner',
      description: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
    },
    {
      image: '../../assets/icons/format_quote.png',
      name: 'E. Eichinger',
      title: 'Team Partner',
      description: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
    },
    {
      image: '../../assets/icons/format_quote.png',
      name: 'I. Nuber',
      title: 'Frontend Endineer',
      description: "It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.",
    },
  ];
}
