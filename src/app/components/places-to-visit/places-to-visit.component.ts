import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-places-to-visit',
  standalone: true,
  imports: [CommonModule,AnimateOnScrollModule],
  templateUrl: './places-to-visit.component.html',
  styleUrl: './places-to-visit.component.scss'
})
export class PlacesToVisitComponent {

  places = [
    {
      name: "Gulmarg",     
       ImgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL97KHynaYkeJI4Rad_dWOUhC6ZaTcHZFr3Q&s'

    },
    {
      name: "Doodhpathri",     
       ImgUrl:'https://taleof2backpackers.com/wp-content/uploads/2021/07/Doodpathri-unexplored-Kashmir-1.jpg'

    },
    {
      name: "Sonamarg",
      ImgUrl: 'https://i0.wp.com/travelshoebum.com/wp-content/uploads/2017/04/dsc_9607.jpg?fit=1024%2C613&ssl=1'

    },
    {
      name: "Pahalgam",
      ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zp8gSg8bNrR6K6XNRR2MuNuvOw20QMsJvQ&s'
    },
    {
      name: "Srinagar",
      ImgUrl: 'https://www.holidify.com/images/compressed/1826.jpg?v=1.1'

    },
    {
      name: "Jammu",
      ImgUrl: 'https://i0.wp.com/travelshoebum.com/wp-content/uploads/2017/04/dsc_9607.jpg?fit=1024%2C613&ssl=1'

    },
  ]
  placeClicked(place:any){
    console.log(place)
  }
}

