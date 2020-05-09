import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SectorCreate } from '../../models/sectorCreate.model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {


  constructor(
    public http: HttpClient,
    public router: Router

  ) {
  }

  cargarSectore(pagina: number = 1, row: number = 5) {

    let url = `${URL_SERVICIOS}/sector/GetPaginatedSector/${pagina}/${row}`;
    return this.http.get(url).pipe(((data: any) => {

      // console.log(url);

      // console.log(data);
      return data;
    }));

  }

  crearSector(sector: SectorCreate) {

    let url = URL_SERVICIOS + '/sector';

    return this.http.post(url, sector)
      .map((resp: any) => {

        return resp;
      });
  }



  actualizarSector(sector: SectorCreate) {

    let url = URL_SERVICIOS + '/sector'; // + usuario._id;
    // url += '?token=' + this.token;

    return this.http.put(url, sector)
      .map((resp: any) => {

        //  let usuarioDB: Usuario = resp.usuario;


        return true;
      });

  }
}
