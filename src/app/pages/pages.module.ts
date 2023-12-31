import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { MovimientosComponent } from './movimientos/movimientos.component';


@NgModule({
  declarations: [DashboardComponent, TransferenciasRecibidasComponent, TransferenciasEnviadasComponent, NuevaTransferenciaComponent, DetalleTransferenciaComponent, MiCuentaComponent, TransferenciaComponent, MovimientosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ComponentesModule
  ]
})
export class PagesModule { }
