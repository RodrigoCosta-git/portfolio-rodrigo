import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@Component({
  selector: 'rc-experience',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {}
