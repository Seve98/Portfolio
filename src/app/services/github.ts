import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, merge } from 'rxjs'; // Aggiungi merge
import { map, switchMap, tap, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Github {
  private readonly GITHUB_API = "https://api.github.com/users/Seve98/repos";
  private readonly CACHE_KEY = 'github_projects_cache';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    const cachedData = localStorage.getItem(this.CACHE_KEY);
    
    // 1. Prepariamo l'Observable dell'API (quello che aggiorna)
    const api$ = this.fetchAllFromApi();

    if (cachedData) {
      // 2. Prepariamo l'Observable della Cache (quello veloce)
      const { data } = JSON.parse(cachedData);
      const cache$ = of(data);

      // Emettiamo prima la cache, poi i dati freschi dall'API
      return merge(cache$, api$);
    }

    // Se non c'è cache, andiamo solo di API
    return api$;
  }

  private fetchAllFromApi(): Observable<any[]> {
    return this.http.get<any[]>(this.GITHUB_API).pipe(
      switchMap(repos => {
        const requests = repos.map(repo =>
          this.http.get<any>(repo.languages_url).pipe(
            map(langs => ({
              id: repo.id,
              title: repo.name,
              description: repo.description,
              githubLink: repo.html_url,
              languages: Object.keys(langs)
            }))
          )
        );
        return forkJoin(requests);
      }),
      // Fondamentale: salviamo i dati freschi per la prossima visita
      tap(projects => this.saveToCache(projects))
    );
  }

  private saveToCache(data: any[]): void {
    localStorage.setItem(this.CACHE_KEY, JSON.stringify({
      data: data,
      timestamp: Date.now()
    }));
  }
}