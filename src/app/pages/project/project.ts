import { Component, OnInit, } from '@angular/core';
import { Card } from '../../components/card/card';
import { CommonModule } from '@angular/common';
import { Github } from '../../services/github';

@Component({
  selector: 'app-project',
  imports: [CommonModule, Card],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export default class Project implements OnInit {
projectlist :any[] =[]
constructor(private github:Github){}
ngOnInit(){
  this.github.getRepos().subscribe(repos=>{
      console.log('Repos ricevuti:', repos);
    this.projectlist=repos.map(repo=>({
      id:repo.id,
      title:repo.name,
      description:repo.description,
      link:repo.html_url
    }))
  })
}  

}
