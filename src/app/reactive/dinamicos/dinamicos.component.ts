import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  public MyForm: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    // this.MyForm.reset({
    //   nombre: 'Fabián'
    // });
  }

  fieldIsInvalid( field: string ): boolean | null {
    return this.MyForm.controls[field].errors
            && this.MyForm.controls[field].touched
  }

  public save() {
    if( this.MyForm.invalid ) {
      this.MyForm.markAllAsTouched();
      return;
    }
    console.log( this.MyForm.value );
    this.MyForm.reset();
  } 

}
