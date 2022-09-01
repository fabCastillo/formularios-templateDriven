import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  
  @ViewChild('myForm') public myForm!: NgForm;

  nombreValido( elemento: string ): boolean {
    return  this.myForm?.controls[elemento]?.invalid && 
            this.myForm?.controls[elemento].touched
  }

  public guardar (): void {
    console.log(this.myForm);
  }

}
