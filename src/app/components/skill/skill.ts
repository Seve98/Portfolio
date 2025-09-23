import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';

@Component({
  selector: 'app-skill',
  imports: [CommonModule,Card],
  templateUrl: './skill.html',
  styleUrl: './skill.css',

})
export  class Skill {
skills: { name: string; icon: string; env: string; value: number; description?: string }[] = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', env:'Frontend', value:90, description:'Strutturazione pagine web' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg', env:'Frontend', value:90, description:'Stilizzazione responsive e animazioni' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', env:'Frontend', value:75, description:'Interattività e logica lato client' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', env:'Frontend', value:30, description:'Tipizzazione codice Angular' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', env:'Frontend', value:60, description:'Sviluppo SPA modulari e reactive' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', env:'Backend', value:30, description:'API REST e backend leggero' },
  { name: 'MySql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', env:'Backend', value:70, description:'Database relazionali' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg', env:'Strumenti', value:80, description:'Versionamento e gestione repository' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', env:'Strumenti', value:80, description:'Collaborazione e CI/CD' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', env:'Backend', value:85, description:'Sviluppo backend e MVC PHP' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', env:'Frontend', value:70, description:'Componenti riutilizzabili e SPA' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', env:'Frontend', value:80, description:'Utility-first styling veloce' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', env:'Frontend', value:80, description:'Layout responsive e componenti pronti' },
  { name: 'Visual Studio Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg', env:'Strumenti', value:80, description:'Editor principale per sviluppo' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', env:'Backend', value:85, description:'Server-side scripting e logica backend' },
];
  environment:{ name:string }[] =[ 
   {name: 'Frontend'}, 
   { name: 'Backend'},
    {name: 'Strumenti'},
  ];
  getSkillsByEnv(envName:string){
    return this.skills.filter(skill => skill.env === envName);
  }

  
}
