import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string = '';
pasword: string = '';

constructor(private clienteService: ClienteService, private router: Router) {}

validarLogin(){
  console.log("Validando...", this.email, this.pasword);

  const usuario = this.clienteService.hacerLogin(this.email, this.pasword)
  if(usuario) {
    console.log(usuario)
    this.router.navigateByUrl("/pages/dashboard");
  } else {
    console.error('Credenciales incorrectas')
  }
  }
}

