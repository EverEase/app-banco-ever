import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nuevoRegistro: any = {
    usuario: "",
    correo: "",
    password: "",
    saldo: null,
    gestor: {
      id: null,
    }
  }
  saldo: any = null;
  id: any = null;
  feedback: string = "";

  constructor(private clienteService: ClienteService) {}

  Registro(){
    this.clienteService
    .guardarCliente(this.nuevoRegistro)
    .subscribe((registroGuardado) => {
      //aquí ya tendremos guardad la transferencia
      console.log({registroGuardado})
      this.feedback = "Registro completado";
    },
    (error) => {
      console.log(error);
      this.feedback = "Error al registrarse"
    });
  }

}

