import { Component } from '@angular/core';
import { ClienteService } from './services/cliente/cliente.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-banco';
  email: string = '';
  password: string = '';
  usuario: any;

  constructor(private clienteService: ClienteService, private router: Router) {}
  

  cerrarSesion(){
    sessionStorage.removeItem("sesion");
  }



}
