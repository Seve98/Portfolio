import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from './components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import Aos from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App implements OnInit {
  protected readonly title = signal('Portfolio');

  ngOnInit(): void {
      Aos.init({
        duration: 1000,
        once:true,
      });
  }
  
}
