import { Component, OnInit, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';

@Component({
  selector: 'rc-home',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  showScrollIndicator = false;
  private scrollTimeout?: number;
  private hasScrolled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  //          ↑ Injeta o ID da plataforma (browser ou server)

  ngOnInit(): void {
    // Só executa no browser, não no servidor
    if (isPlatformBrowser(this.platformId)) {
      this.scrollTimeout = window.setTimeout(() => {
        if (!this.hasScrolled) {
          this.showScrollIndicator = true;
        }
      }, 6000);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    // Proteção adicional (só por segurança)
    if (isPlatformBrowser(this.platformId)) {
      this.hasScrolled = true;
      this.showScrollIndicator = false;
      
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}