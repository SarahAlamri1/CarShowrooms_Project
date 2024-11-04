import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custem-input',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './custem-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustemInputComponent),
      multi: true
    }
  ]
})
export class CustemInputComponent implements ControlValueAccessor{
  @Input() label: string = 'Input Label';
  @Input() placeholder: string = '';
  @Input() inputId: string = '';
  @Input() controlName!: string;
  @Input() formGroupDirective!: FormGroupDirective;
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() isRequired: boolean =false;
  @Input() errorMessage: string = '';

  @Output() valueChange = new EventEmitter<string>();

  value: string = ''; 
  onTouched: () => void = () => {};
  onChange: (value: string) => void = () => {};
  
  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}
