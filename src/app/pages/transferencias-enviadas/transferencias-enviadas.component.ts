import { Component } from '@angular/core';
import { TransferenciasEnviadas } from 'src/app/datos/transferencias.enviadas.ejemplo';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent {

  transferencias: any[] = TransferenciasEnviadas;

}
