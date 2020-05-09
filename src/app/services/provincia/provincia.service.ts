import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProvinciaCreate } from '../../models/provinciaCreate.model';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(  public http: HttpClient,
    public router: Router) { }

  cargarProvincias(pagina: number = 1, row: number = 5) {

    let url = `${URL_SERVICIOS}/provincia/GetPaginatedProvincias/${pagina}/${row}`;
    return this.http.get(url).pipe(((data: any) => {

      // console.log(url);

      // console.log(data);
      return data;
    }));

  }


  crearProvincia(provincia: ProvinciaCreate) {

    let url = URL_SERVICIOS + '/provincia';

    return this.http.post(url, provincia)
      .map((resp: any) => {

        return resp;
      });
  }

  actualizarProvincia(provincia: ProvinciaCreate) {

    let url = URL_SERVICIOS + '/provincia'; // + usuario._id;
    // url += '?token=' + this.token;

    return this.http.put(url, provincia)
      .map((resp: any) => {

        //  let usuarioDB: Usuario = resp.usuario;


        return true;
      });

  }
}
