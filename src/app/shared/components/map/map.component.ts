import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    const locations = [
      { lat: 48.8566, lng: 2.3522, description: 'Paris, France' },
      { lat: 40.7128, lng: -74.006, description: 'New York, USA' },
      { lat: 34.0522, lng: -118.2437, description: 'Los Angeles, USA' },
      { lat: 51.5074, lng: -0.1278, description: 'Londres, Royaume-Uni' },
      { lat: 35.6762, lng: 139.6503, description: 'Tokyo, Japon' },
      { lat: 39.9042, lng: 116.4074, description: 'Pékin, Chine' },
      { lat: -33.8688, lng: 151.2093, description: 'Sydney, Australie' },
      { lat: 55.7558, lng: 37.6173, description: 'Moscou, Russie' },
      { lat: 40.7306, lng: -73.9352, description: 'Brooklyn, USA' },
      { lat: 48.2082, lng: 16.3738, description: 'Vienne, Autriche' },
      { lat: -22.9068, lng: -43.1729, description: 'Rio de Janeiro, Brésil' },
      { lat: 19.4326, lng: -99.1332, description: 'Mexico City, Mexique' },
      { lat: 52.52, lng: 13.405, description: 'Berlin, Allemagne' },
      { lat: 1.3521, lng: 103.8198, description: 'Singapour' },
      { lat: 51.1657, lng: 10.4515, description: 'Berlin, Allemagne' },
    ];

    locations.forEach((location) => {
      L.marker([location.lat, location.lng]).addTo(this.map).bindPopup(location.description);
    });
  }
}
