import { CanActivateFn } from '@angular/router';
import { ClienteService } from '../services/cliente/cliente.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  //inyectar servicio cliente
  const clienteService = inject(ClienteService);
  //leer la sesion actual si la hay
  const sesion = clienteService.leerSesion();
  // si hay sesion tienes acceso, si no, no
  if(sesion){
    return true
  }else{
    return false;
  }
  }
;
