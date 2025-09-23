import { Component, OnInit } from '@angular/core';
import { Card } from '../../components/card/card';
import { CommonModule } from '@angular/common';
import { Github } from '../../services/github';
import { forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  imports: [CommonModule, Card],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export default class Project implements OnInit {
  projectlist: any[] = [];

  constructor(private github: Github) {}

  ngOnInit() {
    this.github.getRepos().pipe(
      switchMap(repos => {
        // Per ogni repo facciamo una chiamata per ottenere i linguaggi
        const requests = repos.map(repo =>
          this.github.getLanguages(repo.languages_url).pipe(
            map(langs => ({
              id: repo.id,
              title: repo.name,
              description: repo.description,
              link: repo.html_url,
              image: `/img/${repo.name}.png`,
              languages: Object.keys(langs) // ottieni array dei linguaggi
            }))
          )
        );
        // forkJoin aspetta che tutte le chiamate siano completate
        return forkJoin(requests);
      })
    ).subscribe(projects => {
      this.projectlist = projects;
      console.log(this.projectlist);
    });
  }
}
