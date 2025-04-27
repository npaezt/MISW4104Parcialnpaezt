import { Component, OnInit } from '@angular/core';
import { Car } from './models/model.car';
import { CarserviceService } from './carservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Car',
  templateUrl: './Car.component.html',
  styleUrls: ['./Car.component.css'],
  imports: [CommonModule]
})
export class CarComponent implements OnInit {

  cars: Car[] = []

  marcaTotals: { [key: string]: number } = {};

  constructor(private readonly car$: CarserviceService) { }

  ngOnInit() {
    this.car$.getCars().subscribe((data)=>{
      this.cars = data;
      this.calculateMarcaTotals();
    })
  }


  calculateMarcaTotals() {
    this.marcaTotals = {};
    for (let car of this.cars) {
      if (this.marcaTotals[car.marca]) {
        this.marcaTotals[car.marca]++;
      } else {
        this.marcaTotals[car.marca] = 1;
      }
    }
  }

}
