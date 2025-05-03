import { Component } from '@angular/core';
import { WorldbankService } from '../worldbank.service';

@Component({
  selector: 'app-svg-map',
  standalone: true,
  imports: [],
  templateUrl: './svg-map.component.html',
  styleUrl: './svg-map.component.css'
})
export class SvgMapComponent {
  id: string | null = null;
  name: string | null = null;
  capital: string | null = null;
  income: string | null = null;
  region: string | null = null;
  longitude: string | null = null;
  latitude: string | null = null;

  constructor(private worldbankService: WorldbankService) {}

  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement && clickedElement.hasAttribute('id')) {
      this.id = clickedElement.getAttribute('id');
      if (this.id) {
      this.searchWorldBank(this.id);
      }
    }
  }

  searchWorldBank(countryCode: string) {
    this.worldbankService.search(countryCode).subscribe((response: any) => {
    console.log(response);
    let countryData = response[1][0];
    console.log(countryData);
    
    this.name = countryData.name;
    this.capital = countryData.capitalCity;
    this.region = countryData.region.value;
    this.income = countryData.incomeLevel.value;
    this.longitude = countryData.longitude;
    this.latitude = countryData.latitude;
    });
  }
}  
