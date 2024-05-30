import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ClientsComponent } from './component/clients/clients.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { NavComponent } from './component/nav/nav.component';
import { ServicesComponent } from './component/services/services.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AboutComponent, ClientsComponent, PricingComponent, TestimonialsComponent, GalleryComponent, NavComponent, ServicesComponent, FooterComponent],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.scss'
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'petshop';
}
