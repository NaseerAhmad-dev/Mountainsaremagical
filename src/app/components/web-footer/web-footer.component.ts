import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-web-footer',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './web-footer.component.html',
  styleUrl: './web-footer.component.scss'
})
export class WebFooterComponent {

}
