import { Component, OnInit } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias.ejemplo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})
export class TransferenciasRecibidasComponent implements OnInit {

  transferencias: any[] = transferenciasRecibidas;

  cliente: any = null

  constructor(private transferenciasService: TransferenciaService,private clienteService: ClienteService) {}


ngOnInit() {
  this.cliente= this.clienteService.leerSesion();
  this.cargarTransferencias();
}

cargarTransferencias(){
  this.transferenciasService
  .obtenerTransferenciasPorBeneficiarioId(this.cliente.id)
    .subscribe((transferenciasCargadas: any) => {
    console.log ( transferenciasCargadas );
    this.transferencias = transferenciasCargadas;
  });

}}