import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CarouselComponent } from '../carousel/carousel.component';
import { HerosectionComponent } from "../herosection/herosection.component";
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { SwipePagesComponentComponent } from "../swipe-pages-component/swipe-pages-component.component";
export interface Product {
  id: string
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number
  inventoryStatus: string;
  rating: number;
}
@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, CarouselComponent, HerosectionComponent, CarouselModule, ButtonModule, TagModule, SwipePagesComponentComponent],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})

export class PackagesComponent {}
