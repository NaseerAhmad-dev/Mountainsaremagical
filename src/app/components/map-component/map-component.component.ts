import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, SimpleChanges, OnChanges, PLATFORM_ID, Inject } from '@angular/core';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.scss'
})
export class MapComponentComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = 'S4x8smbs3g0jAtbg0WdF';
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.mapContainer && this.mapContainer.nativeElement) {
      const initialState = { lng: 75.2169, lat: 34.2946, zoom: 18 };
      this.map = new Map({
        container: this.mapContainer.nativeElement,
        style: MapStyle.STREETS,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,
        bearing: 0, 
        scrollZoom: false, // Disable zooming with the scroll wheel
        dragRotate: false, // Disable rotating with dragging
        touchZoomRotate: false, // Disable touch zooming and rotating
        minZoom: initialState.zoom, // Lock the minimum zoom level
        maxZoom: initialState.zoom  // Lock the maximum zoom level
      });
      new Marker({ color: "#d2691e" })
        .setLngLat([75.2169, 34.2946])
        .addTo(this.map);
    }

  }

  ngOnDestroy() {
    this.map?.remove();
  }
}