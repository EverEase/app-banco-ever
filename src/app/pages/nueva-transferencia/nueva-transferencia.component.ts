import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';




@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit {
  nuevaTransferencia: any = {
    ordenante:{
    id: null,
  },
  beneficiario: {
    id: null,
  },
  concepto: '',
  import: 0,
};

//para guardar el cliente ya logueado y usuario como ordenante
ordenante: any = null;

feedback: string = '';

constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService) {}

ngOnInit(): void {
  this.ordenante = this.clienteService.leerSesion();
}

enviarTransferencia(){
  if(this.ordenante){
    //asignar id del ordenante
  this.nuevaTransferencia.ordenante.id = this.ordenante.id
  // enviar la transferencia al backend
  this.transferenciaService
  .guardar(this.nuevaTransferencia)
  .subscribe((transferenciaGuardada) => {
    //aquí ya tendremos guardad la transferencia
    console.log({transferenciaGuardada});
    this.feedback = "Transferencia enviada";

  },
  (error) => {
    console.log(error)
    this.feedback = "Error al enviar transferencia"
  });
}
}

}
