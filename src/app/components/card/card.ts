import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
 @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() languages: string[] = []; 
  @Input() githubLink: string = '';
  @Input() projectLink: string = '';
  
  // Mantieni questi per retrocompatibilità se usi il component altrove
  @Input() link: string = ''; // Deprecato, usa projectLink
  @Input() showBtn: boolean = true;

  




}
