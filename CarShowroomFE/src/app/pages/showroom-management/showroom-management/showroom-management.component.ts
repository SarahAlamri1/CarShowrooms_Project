import { Component, OnInit } from '@angular/core';
import { PageContainerComponent } from "../../../component/page-container/page-container.component";
import { PagingRequest, ShowroomService } from '../../../service/Showroom/showroom.service';
import { error } from 'console';
import { CarShowroom, CreateCarShowroomRequests } from '../../../models/car-showroom';
import { ApiResponse } from '../../../models/api-response';

@Component({
  selector: 'app-showroom-management',
  standalone: true,
  imports: [PageContainerComponent],
  templateUrl: './showroom-management.component.html',
})
export class ShowroomManagementComponent implements OnInit{



  showrooms:any;
  columns = [
    { label: 'Name', field: 'name' },
    { label: 'commercial registration number', field: 'commercialRegistrationNumber' },
    { label: 'contact number', field: 'contactNumber' },
    { label: ' ', field: 'A' },
  ];
  data! : ApiResponse<any>;
  carShowroom!: CarShowroom;
    
    pageble: PagingRequest = {
      page: 0,
      size: 5,
      sortBy: "name",
      ascending:true
    }

    constructor(private showroomService:ShowroomService){}

    ngOnInit() {
    this.getAllShowrooms(this.pageble)
  }

  createNewCarShowroom(event: CreateCarShowroomRequests){
    let carShowroom: CreateCarShowroomRequests = {
      commercial_registration_number:Number(event.commercial_registration_number) ,
      name: event.name,
      manager_name: event.manager_name,
      contact_number: Number(event.contact_number),
      address:event.address
    };
  
    this.showroomService.createCarShowroom(carShowroom).subscribe(
    {  next: (resp) => {
      this.getAllShowrooms(this.pageble);
        // Handle successful response 
      },
      error:(err) => {
        // Handle error response
      }}
    );
  }

  getAllShowrooms(pageble :PagingRequest){
    this.showroomService.getAllShowrooms(pageble).subscribe(
      {
        next: (resp) => {
         this.data = resp
        },
        error:(err) => {
                  // Handle error response
        }
      }
    )
  }

  updateCarShowroom(info:any){
    this.showroomService.updateCarShowroom(info).subscribe({
      next: () => {
        console.log('Car showroom deleted successfully');
        this.getAllShowrooms(this.pageble);
      },
      error: (err) => {
        console.error('Error deleting car showroom', err);
      }
    });

  }

  viewDetails(id:number){
    console.log(id);
    this.showroomService.getCarShowroom(id).subscribe({
      next: (res) => {
        this.carShowroom = res;
        console.log('Car showroom ', res);
      },
      error: (err) => {
        console.error('Error deleting car showroom', err);
      }
    });
  }

  onDeleteCarShowroom(id: number) {
    this.showroomService.deleteCarShowroom(id).subscribe({
      next: () => {
        console.log('Car showroom deleted successfully');
        this.getAllShowrooms(this.pageble);
      },
      error: (err) => {
        console.error('Error deleting car showroom', err);
      }
    });
  }
}
