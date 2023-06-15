import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaTransferenciasComponent } from './tabla-transferencias/tabla-transferencias.component';



@NgModule({
  declarations: [
    TablaTransferenciasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablaTransferenciasComponent
  ]
})
export class ComponentesModule { }
