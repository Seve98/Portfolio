import { Component, OnInit } from '@angular/core';
import { Skill } from '../../components/skill/skill';
import {CommonModule,} from '@angular/common';
import {  Mail,Github, Linkedin, LucideAngularModule } from 'lucide-angular';
import AboutMe from '../about-me/about-me';
import Service from '../service/service';
import Project from '../project/project';
import ContactMe from '../contact-me/contact-me';

@Component({
  selector: 'app-home',
  imports: [CommonModule,Skill, LucideAngularModule,AboutMe,Service,Project,ContactMe ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class Home  {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
}
