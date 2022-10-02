import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  public MyForm: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      [ 'Halo 2' ],
      [ 'League of Lengeds'],
    ], Validators.required )
  });

  get favoritesArr () {
    return this.MyForm.get('favoritos') as FormArray;
  }

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
