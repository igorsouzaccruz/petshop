import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    ClientsComponent,
    PricingComponent,
    TestimonialsComponent,
    GalleryComponent,
    NavComponent,
    ServicesComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
