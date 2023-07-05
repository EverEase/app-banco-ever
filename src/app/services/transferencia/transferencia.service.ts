import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  urlApi: string = "http://localhost:8080/transferencia";

  //obtener transferencias
  obtenerTransferencias(){
    return this.http.get(this.urlApi);
  }

  obtenerTransferenciasPorOrdenanteId(id: number) {
    return this.http.get(`${this.urlApi}/cliente/${id}`)
  }

  obtenerTransferenciasPorBeneficiarioId(id: number) {
    return this.http.get(`${this.urlApi}/beneficiario/${id}`)
  }

  //guardar transferencia

  //buscar transferencia por correo y password

  //buscar transferencia por correo
}
