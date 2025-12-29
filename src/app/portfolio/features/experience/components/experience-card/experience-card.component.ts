import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rc-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
})
export class ExperienceCardComponent {
  @Input() title = 'Empresa / Projeto';
  @Input() period = '2023 - Presente';
  @Input() description = 'Descrição breve da experiência.';
}
