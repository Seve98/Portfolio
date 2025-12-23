import { Component, OnInit } from '@angular/core';
import { Card } from '../../components/card/card';
import { CommonModule } from '@angular/common';
import { Github } from '../../services/github';

@Component({
  selector: 'app-project',
  standalone: true, // Se usi Angular 19+, assicurati che sia standalone o importato correttamente
  imports: [CommonModule, Card],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export default class Project implements OnInit {
  projectlist: any[] = [];

  // Mappa dei link custom per ogni progetto
  private projectLinks: { [key: string]: string } = {
    'Portfolio': 'https://severino-santalucia-portfolio.vercel.app',
    'DigitalQuest': 'https://digital-quest-omega.vercel.app/',

  };

  constructor(private github: Github) {}

  ngOnInit() {
    // Chiamiamo il metodo del service che gestisce già la cache e i linguaggi
    this.github.getProjects().subscribe({
      next: (projects) => {
        // Qui aggiungiamo solo le info specifiche della UI che non vogliamo in cache
        this.projectlist = projects.map(repo => ({
          ...repo,
          image: `/img/${repo.title}.png`,
          projectLink: this.getProjectLink(repo.title)
        }));
      },
      error: (err) => {
        console.error("Errore nel caricamento dei progetti:", err);

      }
    });
  }

  private getProjectLink(repoName: string): string {
    // Restituisce il link custom se esiste, altrimenti il link alla repo GitHub
    return this.projectLinks[repoName] || `https://github.com/Seve98/${repoName}`;
  }
}