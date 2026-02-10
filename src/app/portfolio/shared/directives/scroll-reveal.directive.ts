import { Directive, ElementRef, Renderer2, OnDestroy, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ 
  selector: '[rcScrollReveal]', 
  standalone: true 
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(
    private el: ElementRef, 
    private rnd: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewInit(): void {
    this.rnd.addClass(this.el.nativeElement, 'will-reveal');

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.rnd.addClass(this.el.nativeElement, 'reveal');
            this.io?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.25 }
    );

    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}