import { 
  Component, 
  ViewChild, 
  ElementRef, 
  AfterViewInit,
  PLATFORM_ID,
  Inject 
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'rc-about',
  standalone: true,
  imports: [CommonModule, SectionContainerComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('codeVideo') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    setTimeout(() => {
      this.ensureVideoPlays();
    }, 100);
  }

  private ensureVideoPlays(): void {
    const video = this.videoElement?.nativeElement;
    if (!video) return;

    // Garante que está mudo antes de qualquer coisa
    video.muted = true;
    video.playsInline = true;

    // Aguarda o vídeo estar pronto para reproduzir
    const attemptPlay = () => {
      video.play()
        .then(() => {
          console.log('✅ Vídeo reproduzindo automaticamente');
        })
        .catch((error) => {
          console.warn('⚠️ Autoplay bloqueado:', error.message);
          // Tenta novamente após interação
          this.setupClickToPlay(video);
        });
    };

    // Se o vídeo já tiver metadados carregados, tenta reproduzir
    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      // Caso contrário, aguarda o evento 'loadedmetadata'
      video.addEventListener('loadedmetadata', attemptPlay, { once: true });
    }
  }

  private setupClickToPlay(video: HTMLVideoElement): void {
    const playOnInteraction = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    document.addEventListener('click', playOnInteraction, { once: true });
    document.addEventListener('touchstart', playOnInteraction, { once: true });
    document.addEventListener('scroll', playOnInteraction, { once: true });
  }
}