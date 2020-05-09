import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { PacienteCreate } from '../../models/pacienteCreate.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(public http: HttpClient,
    public router: Router) { }



  cargarPacientes(pagina: number = 1, row: number = 5) {

    let url = `${URL_SERVICIOS}/paciente/GetPaginatedPacientes/${pagina}/${row}`;
    return this.http.get(url).pipe(((data: any) => {

      // console.log(url);

      // console.log(data);
      return data;
    }));

  }


  crearPaciente(paciente: PacienteCreate) {

    let url = URL_SERVICIOS + '/paciente';

    return this.http.post(url, paciente)
      .map((resp: any) => {

        return resp;
      });
  }

  actualizarPaciente(paciente: PacienteCreate) {

    let url = URL_SERVICIOS + '/provincia'; // + usuario._id;
    // url += '?token=' + this.token;

    return this.http.put(url, paciente)
      .map((resp: any) => {

        //  let usuarioDB: Usuario = resp.usuario;


        return true;
      });

  }
}
