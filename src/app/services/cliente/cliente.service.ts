import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientes } from 'src/app/datos/usuarios.ejemplo'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApi: string = "http://localhost:8081/cliente"

  constructor(private http: HttpClient) { }

  hacerLogin(email: string, password: string){
    for(let cliente of clientes){
      if(email===cliente.correo && password===cliente.password) {
        return cliente;
      }
  }
  return null;

  }

  obtenerClientes(){
    return this.http.get(this.urlApi);
  }
}
