

import { Component, OnInit } from '@angular/core';

import { DataserviceService } from '../services/dataservice.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';

export interface Activity {
    day: string;
    dayActivity: string | string[];
  }
  
  
  export interface Package {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    packBadge: string;
    days: number;
    nights: number;
    rating: number;
    destinations: string[];
    activities: Activity[];
    inclusions: string[] | string[];
  }

@Component({
  selector: 'app-swipe-pages-component',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  providers: [],
  templateUrl: './swipe-pages-component.component.html',
  styleUrl: './swipe-pages-component.component.scss'
})
export class SwipePagesComponentComponent  implements OnInit {
    packages!: Package[];

    responsiveOptions: any;

    constructor(private dataService: DataserviceService, private router:Router) {}

    ngOnInit() {
        this.dataService.getProductsSmall().then((packages) => {
            this.packages = packages;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'BESTSELLING':
                return 'success';
            case 'TRENDING':
                return 'warning';
            case 'POPULAR':
                return 'info';
        }
        return 'secondary'
    }
    packageClicked(pack:any){
     this.dataService.packSelected.next(pack);
     this.router.navigate(['view-details']);  
    }

}
