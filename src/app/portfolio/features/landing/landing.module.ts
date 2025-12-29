import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { ExperienceCardComponent } from '../experience/components/experience-card/experience-card.component';

@NgModule({
  imports: [
    SharedModule,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceCardComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class LandingModule {}
