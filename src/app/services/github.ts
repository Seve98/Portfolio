import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Github {
  private GITHUB_API="https://api.github.com/users/Seve98/repos"

  constructor(private http:HttpClient) {  }

  getRepos(): Observable<any[]>{
    return this.http.get<any[]>(this.GITHUB_API)
  }
  getLanguages(url:string){
    return this.http.get<any>(url)
  }
}