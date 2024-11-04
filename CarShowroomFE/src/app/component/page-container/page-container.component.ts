import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { CustemInputComponent } from '../custem-input/custem-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarShowroom } from '../../models/car-showroom';
import { ApiResponse } from '../../models/api-response';
import { PagingRequest } from '../../service/Showroom/showroom.service';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,DialogFormComponent,CustemInputComponent],
  templateUrl: './page-container.component.html',
})
export class PageContainerComponent {

  @Input({ required: false }) pageTitle: string = '';
  @Input() columns:  { label: string, field:string }[] = [];
  @Input() data!: ApiResponse<any>;
  @Input() detailsInfo!: CarShowroom;
  @Input() isAddNewCarDialog!: boolean;

  
  @Output() clickedRow = new EventEmitter<number>();
  @Output() btnClick = new EventEmitter<Event>();
  @Output() createInfo = new EventEmitter<any>();
  @Output() viewInfo = new EventEmitter<any>();
  @Output() editInfo = new EventEmitter<any>();
  @Output()  pagebleChange = new EventEmitter<PagingRequest>();

  isDialogOpen = false;
  editeFlage !: boolean;
  viewFlage !: boolean;
  currentPage: number = 0;
  row!: any;

  pageble: PagingRequest = {
    page: 0,
    size: 5,
    sortBy: "name",
    ascending:true
  }

  openDialog(): void {   
    this.isDialogOpen = true;
    this.editeFlage  = false;
    this.viewFlage  = false; 
  }
  close() {
    this.isDialogOpen = false;
  }
  handleClick(event: Event): void {
      this.btnClick.emit(event);
  }

  view(row:any){    
    this.isDialogOpen = true;
    this.editeFlage  = false 
    this.viewFlage  = true;
    this.viewInfo.emit(row.commercialRegistrationNumber); 
  }

  edit(row:any) {
    this.isDialogOpen = true;
    this.editeFlage = true
    this.viewFlage  = false; 
    this.row = row.commercialRegistrationNumber;
    
  }
    
  getProperty(row:any , column:string)
  {
    console.log(column);
    return  column.split('.').reduce((acc, part) => acc && acc[part], row);
  }

  validInfo(event: any) {
    this.createInfo.emit(event)
  }

  validEditInfo(event: any) {
    this.editInfo.emit(event);
  }

  activeRow(row:any){
    console.log(row);
    this.clickedRow.emit(row.commercialRegistrationNumber);
  }

  loadPage(page: number): void {
    this.pageble.page = page 
    this.pagebleChange.emit(this.pageble)
  }

  nextPage(): void {
    if (this.data && !this.data.last) {
      this.loadPage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.data && !this.data.first) {
      if(this.currentPage - 1 == -1){
        this.loadPage(this.currentPage);
      }else{
        this.loadPage(this.currentPage -1);
      }
    }
  }
}


