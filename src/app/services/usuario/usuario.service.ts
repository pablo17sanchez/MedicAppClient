import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { map } from 'rxjs-compat/operator/map';
import { UsuarioCreate } from '../../models/usuarioCreate.model';


@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
  ) {
    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarUsuarios(pagina: number = 1, row: number = 5) {

    let url = `${URL_SERVICIOS}/usuario/GetPaginatedUsuarios/${pagina}/${row}`;
    return this.http.get(url).pipe(((data: any) => {

      // console.log(url);

      // console.log(data);
      return data;
    }));

  }

  cargarStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  guardarStorage(id: string, token: string, usuario: Usuario) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  loginGoogle(token: string) {

    let url = URL_SERVICIOS + '/login/google';

    /* return this.http.post(url, { token })
       .map((resp: any) => {
         this.guardarStorage(resp.id, resp.token, resp.usuario);
         return true;
       });*/


  }

  login(usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      // localStorage.setItem('email', usuario.email );
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario);

  }


  crearUsuario(usuario: UsuarioCreate) {

    let url = URL_SERVICIOS + '/usuario';
    console.log(url);
    return this.http.post(url, usuario)
      .map((resp: any) => {

        return resp;
      });
  }

  actualizarUsuario(usuario: UsuarioCreate) {

    let url = URL_SERVICIOS + '/usuario/'; // + usuario._id;
    url += '?token=' + this.token;

    return this.http.put(url, usuario)
      .map((resp: any) => {

        // this.usuario = resp.usuario;
        let usuarioDB: Usuario = resp.usuario;

        // this.guardarStorage( usuarioDB._id, this.token, usuarioDB );
        // swal('Usuario actualizado', usuario.nombre, 'success' );

        return true;
      });

  }

  cambiarImagen(archivo: File, id: string) {

    this._subirArchivoService.subirArchivo(archivo, 'usuarios', id)
      .then((resp: any) => {

        // this.usuario.img = resp.usuario.img;
        // swal('Imagen Actualizada', this.usuario.nombre, 'success');
        this.guardarStorage(id, this.token, this.usuario);

      })
      .catch(resp => {
        console.log(resp);
      });

  }

}
