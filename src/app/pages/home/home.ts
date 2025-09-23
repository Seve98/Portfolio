import { Component, OnInit } from '@angular/core';
import { Skill } from '../../components/skill/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,Skill],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class Home  {

}
