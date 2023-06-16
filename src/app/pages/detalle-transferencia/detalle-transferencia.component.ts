import { Component } from '@angular/core';
import { TransferenciasEnviadas } from 'src/app/datos/transferencias.enviadas.ejemplo';


@Component({
  selector: 'app-detalle-transferencia',
  templateUrl: './detalle-transferencia.component.html',
  styleUrls: ['./detalle-transferencia.component.css']
})
export class DetalleTransferenciaComponent {
  
  transferencia: any = TransferenciasEnviadas [1]


}
