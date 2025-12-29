import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';

@NgModule({
  imports: [CommonModule, SectionContainerComponent, ScrollRevealDirective],
  exports: [SectionContainerComponent, ScrollRevealDirective, CommonModule],
})
export class SharedModule {}
