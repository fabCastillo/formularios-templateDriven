import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  // myForm: FormGroup = new FormGroup({
  //   nombre     : new FormControl('Mouse inalambrico'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  myForm: FormGroup = this.formBuilder.group({
    nombre     : [ null, [ Validators.required, Validators.minLength(3) ] ],
    precio     : [ null, [ Validators.required, Validators.min(0) ] ],
    existencias: [ null, [ Validators.required, Validators.min(0) ] ]
  });
  
  constructor( private formBuilder: FormBuilder ) { }

  public fieldIsNotValid( field: string ) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

}
