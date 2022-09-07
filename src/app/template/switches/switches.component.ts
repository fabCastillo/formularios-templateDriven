import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {
  persona = {
    genero: '',
    notificaciones: true
  }

  terminos: boolean = false;
}
