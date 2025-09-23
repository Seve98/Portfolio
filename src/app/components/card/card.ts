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
  @Input() link: string = '';
  @Input() language: string = '';
  @Input() showBtn: boolean = false;

  




}
