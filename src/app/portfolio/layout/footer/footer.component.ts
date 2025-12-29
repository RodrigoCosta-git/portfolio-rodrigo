import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rc-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
