import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css' // Assicurati che questo file esista!
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyScroll();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.toggleBodyScroll();
  }

  private toggleBodyScroll() {
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.closeMenu();

    // Aspettiamo che il drawer inizi a chiudersi prima di scorrere
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }, 150);
  }
}