import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { BannerComponent } from './components/banner/banner.component';
import { PackagesComponent } from "./components/packages/packages.component";
import { CarouselComponent } from './components/carousel/carousel.component';
import { PlacesToVisitComponent } from './components/places-to-visit/places-to-visit.component';
import { WebFooterComponent } from "./components/web-footer/web-footer.component";
import { HerosectionComponent } from './components/herosection/herosection.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ChatComponentComponent } from "./components/chat-component/chat-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ScrollTopModule, ClientReviewsComponent, BannerComponent, PackagesComponent, CarouselComponent, PlacesToVisitComponent, HerosectionComponent, WebFooterComponent, ChatComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MountainsCalling';
}
