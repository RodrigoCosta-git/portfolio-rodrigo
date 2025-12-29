import { Directive, ElementRef, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({ selector: '[rcScrollReveal]', standalone: true })
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(private el: ElementRef, private rnd: Renderer2) {}

  ngAfterViewInit(): void {
    this.rnd.addClass(this.el.nativeElement, 'will-reveal');

    if (typeof IntersectionObserver === 'undefined' || typeof window === 'undefined') {
      // Server environment or older browsers: skip observer and reveal immediately
      this.rnd.addClass(this.el.nativeElement, 'reveal');
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
      { threshold: 0.12 }
    );
    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
