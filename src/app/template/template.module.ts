import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicosComponent } from './basicos/basicos.component';
import { CustomMinDirective } from './directives/custom-min.directive';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    CustomMinDirective,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
