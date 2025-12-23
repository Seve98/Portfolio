import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export default class AboutMe {
features: Feature[] = [
    {
      title: 'Sviluppo Front-end',
      description: 'Creazione di interfacce utente moderne e responsive con Angular, React e TypeScript',
      icon: 'code'
    },
    {
      title: 'UI/UX Design',
      description: 'Progettazione di esperienze utente intuitive e accessibili',
      icon: 'palette'
    },
    {
      title: 'Ottimizzazione',
      description: 'Performance e best practices per applicazioni web veloci e scalabili',
      icon: 'zap'
    }
  ];
   getIconClass(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'code': '💻',
      'palette': '🎨',
      'zap': '⚡'
    };
    return iconMap[icon] || '📌';
  }
}
