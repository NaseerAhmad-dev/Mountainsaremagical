import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { PackagesComponent } from "../packages/packages.component";
import { SidebarModule } from 'primeng/sidebar'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, CommonModule, PackagesComponent,SidebarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  openMenuClicked:boolean = false;
  logoUrl: string = 'https://tourmatekashmir.com/images/logo-default-208x46.png'
  openMenu(){
    this.openMenuClicked = !this.openMenuClicked;
  }
}