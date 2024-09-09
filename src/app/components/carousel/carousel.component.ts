import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [BadgeModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  imgUrl:string | undefined
  imgUrl1:string | undefined
  imgUrl2:string | undefined
  constructor(){
    this.imgUrl = 'https://images.pexels.com/photos/8742541/pexels-photo-8742541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    this.imgUrl1 = 'https://kashmirradar.com/wp-content/uploads/2020/10/20201011_191002.jpg';
    this.imgUrl2 = 'https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg';
  }
 
}
