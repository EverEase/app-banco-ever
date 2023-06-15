import { Injectable } from '@angular/core';
import { clientes } from 'src/app/datos/usuarios.ejemplo'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  hacerLogin(email: string, password: string){
    for(let cliente of clientes){
      if(email===cliente.correo && password===cliente.password) {
        return cliente;
      }
  }
  return null;

  }
}
