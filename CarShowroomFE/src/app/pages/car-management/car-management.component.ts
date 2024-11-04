import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../component/layout/layout.component";
import { RouterOutlet } from '@angular/router';
import { PageContainerComponent } from '../../component/page-container/page-container.component';
import { CarService } from '../../service/car/car.service';
import { PagingRequest } from '../../service/Showroom/showroom.service';
import { AddCarRequests } from '../../models/car';
import { ApiResponse } from '../../models/api-response';

@Component({
  selector: 'app-car-management',
  standalone: true,
  imports: [LayoutComponent,PageContainerComponent],
  templateUrl: './car-management.component.html',
})
export class CarManagementComponent implements OnInit{

  columns = [
    { label: 'vin', field: 'vin' },
    { label: 'maker', field: 'maker' },
    { label: 'model', field: 'model' },
    { label: 'modelYear', field: 'modelYear' },
    { label: 'price', field: 'price' },
    { label: 'showroom', field: 'showroom.name' },
  ];
  data! : ApiResponse<any>;
  pageble: PagingRequest = {
    page: 0,
    size: 5,
    sortBy: "vin",
    ascending:true
  }
  constructor(private carService:CarService){}

  ngOnInit() {
    this.getCars(this.pageble)    
  } 

  createNewCar(event: AddCarRequests){
    let car: AddCarRequests = {
      vin: event.vin,
      marker: event.marker,
      model: event.model,
      modelYear:  Number(event.modelYear),
      price: Number(event.price),
      showroom: {commercial_registration_number:Number(event.showroom.commercial_registration_number)}
    };
  
    this.carService.createCar(car).subscribe(
    {  next: (resp) => {
      this.getCars(this.pageble)
      },
      error:(err) => {
        // Handle error response
      }}
    );
  }

  getCars(pageble :PagingRequest){
    this.carService.getAllSCars(pageble).subscribe(
      {
        next: (resp) => {
         this.data = resp
        },
        error:(err) => {}
      }
    )
  }

}
