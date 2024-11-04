import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustemInputComponent } from "../custem-input/custem-input.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarShowroom, CreateCarShowroomRequests } from '../../models/car-showroom';
import { Regex } from '../../app.constants';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AddCarRequests } from '../../models/car';


@Component({
  selector: 'app-dialog-form',
  standalone: true,
  imports: [CustemInputComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './dialog-form.component.html',
})
export class DialogFormComponent implements OnInit{

  protected statusChanges$: Subscription = new Subscription();
  Regex = Regex;
  @Input() isEditDialog!: boolean;
  @Input() isViewDialog!: boolean;
  @Input() isAddNewCarDialog!: boolean;  
  @Input() title: string = 'Dialog Title';
  @Input() form!: FormGroup;
  @Input() data!: any;
  @Input() detailsInfo!: any;
  @Output() closeDialog = new EventEmitter();
  @Output() validInfo = new EventEmitter<any>();
  @Output() validEditInfo = new EventEmitter<any>();

  carShowroom: CreateCarShowroomRequests = {
    commercial_registration_number: 0,
    name: '',
    manager_name: '',
    contact_number: 0,
    address:''
  };

  car:AddCarRequests ={
    vin: '',
    marker: '',
    model: '',
    modelYear: 0,
    price: 0,
    showroom: {commercial_registration_number:0}
  }



  carShowroomForm: FormGroup = new FormGroup({
    commercial_registration_number: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(/^[0-9]*$/)
      ]
    }),
    name: new FormControl('', {
      validators: [
        Validators.required,
      ]
    }),
    manager_name: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    contact_number: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    address: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    });

  
    carForm: FormGroup = new FormGroup({
      vin: new FormControl('', 
        {
        validators: [
          Validators.required,
          Validators.maxLength(25),
        ]
      }),
      maker: new FormControl('', {
        validators: [
          Validators.required,
        ]
      }),
      model: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      model_year: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      price: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      commercial_registration_number: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      });

    ngOnInit() {
console.log("data :",this.data);

    }


    add()
    {
      if(this.isAddNewCarDialog)
      {      
          if (this.carForm.valid){        
        this.car = {
          vin: this.carForm.get('vin')?.value ?? 0,
          marker: this.carForm.get('maker')?.value ?? 0,
          model: this.carForm.get('model')?.value ?? 0,
          modelYear: this.carForm.get('model_year')?.value ?? 0,
          price:  this.carForm.get('price')?.value ?? 0,
          showroom: {commercial_registration_number: this.carForm.get('commercial_registration_number')?.value ?? 0,}

        }        
      this.validInfo.emit(this.car);
      this.closeDialog.emit();
      this.carShowroomForm.reset();
    } else {
      this.validInfo.emit(null);
    }   

      }else{
        if (this.carShowroomForm.valid){        
          this.carShowroom = {
            commercial_registration_number:this.carShowroomForm.get('commercial_registration_number')?.value ?? 0,
            name: this.carShowroomForm.get('name')?.value ?? '',
            manager_name: this.carShowroomForm.get('manager_name')?.value ?? '',
            contact_number: this.carShowroomForm.get('contact_number')?.value ?? 0,
            address:this.carShowroomForm.get('address')?.value ?? '',
          }        
        this.validInfo.emit(this.carShowroom);
        this.closeDialog.emit();
        this.carShowroomForm.reset();
      } else {
        this.validInfo.emit(null);
      }   
      }
 
  }

  edit() {
    console.log("dara",this.data );
    
      let updatedcarShowroom = {
        commercial_registration_number:this.data,
        address: this.carShowroomForm.get('address')?.value ?? '',
        manager_name: this.carShowroomForm.get('manager_name')?.value ?? '',
        contact_number: this.carShowroomForm.get('contact_number')?.value ?? 0,
      }      
       console.log();
       this.closeDialog.emit();
       this.carShowroomForm.reset();
    this.validEditInfo.emit(updatedcarShowroom);

 }

  close(): void {
    this.closeDialog.emit();
    this.carShowroomForm.reset();
  }
}
