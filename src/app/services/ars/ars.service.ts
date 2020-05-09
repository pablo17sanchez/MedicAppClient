import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArsCreate } from '../../models/arsCreate.model';

@Injectable({
  providedIn: 'root'
})
export class ArsService {

  constructor(public http: HttpClient,
    public router: Router) { }


  cargarArs(pagina: number = 1, row: number = 5) {

    let url = `${URL_SERVICIOS}/ars/GetPaginatedArs/${pagina}/${row}`;
    return this.http.get(url).pipe(((data: any) => {

       console.log(url);

      // console.log(data);
      return data;
    }));

  }


  crearArs(ars: ArsCreate) {

    let url = URL_SERVICIOS + '/ars';

    return this.http.post(url, ars)
      .map((resp: any) => {

        return resp;
      });
  }

  actualizarArs(ars: ArsCreate) {

    let url = URL_SERVICIOS + '/ars'; // + usuario._id;
    // url += '?token=' + this.token;

    return this.http.put(url, ars)
      .map((resp: any) => {

        //  let usuarioDB: Usuario = resp.usuario;


        return true;
      });

  }




}
