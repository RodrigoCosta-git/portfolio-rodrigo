import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './portfolio/layout/header/header.component';
import { HomeComponent } from './portfolio/features/home/home.component';
import { AboutComponent } from './portfolio/features/about/about.component';
import { ExperienceComponent } from './portfolio/features/experience/experience.component';
import { ContactComponent } from './portfolio/features/contact/contact.component';
import { FooterComponent } from './portfolio/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('portfolio-rodrigo');
}
