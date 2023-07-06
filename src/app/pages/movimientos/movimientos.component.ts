import { Component, OnInit } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias.ejemplo';
import { TransferenciasEnviadas } from 'src/app/datos/transferencias.enviadas.ejemplo';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  transferencias: any [] = []

  ngOnInit()  {
    this.transferencias = this.transferencias.concat(transferenciasRecibidas, TransferenciasEnviadas)
    console.log(this.transferencias)
    
  }

}
