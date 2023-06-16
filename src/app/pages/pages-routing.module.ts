import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';

const routes: Routes = [
  {path: 'dashboard',
component: DashboardComponent},{
  path : 'transferencias-recibidas',
  component: TransferenciasRecibidasComponent
}, {
  path: 'transferencias-enviadas',
  component: TransferenciasEnviadasComponent
}, {
  path: 'transferencias/:id',
  component: DetalleTransferenciaComponent
}, {
  path: 'mi-cuenta',
  component: MiCuentaComponent
}, {
  path: 'nueva-transferencia',
  component: NuevaTransferenciaComponent
}, {
  path: 'transferencia',
  component: TransferenciaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
