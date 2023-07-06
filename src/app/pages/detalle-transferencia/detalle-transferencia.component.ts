import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';


@Component({
  selector: 'app-detalle-transferencia',
  templateUrl: './detalle-transferencia.component.html',
  styleUrls: ['./detalle-transferencia.component.css']
})
export class DetalleTransferenciaComponent implements OnInit{

  //para guardar la trnsferencia leida
  transferencia: any = null;

  // ActiveedRoute permite hacer operaciones con la ruta
  constructor(private route: ActivatedRoute, private transferenciaService: TransferenciaService){}

  ngOnInit(): void{
    const transferenciaIdString = this.route.snapshot.paramMap.get('id');
    let transferenciaId;
    if(transferenciaIdString){
      transferenciaId = parseInt(transferenciaIdString);
      console.log({ transferenciaId });
      //obtener transferencia a partir del id
      this.transferenciaService
      .obtenerTransferenciaPorId(transferenciaId)
      .subscribe((transferencia) =>{
        // aqui ya tenemos la transferencia
        console.log({ transferencia });
        this.transferencia = transferencia
      })
    }

  }


}
