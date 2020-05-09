import { Component, OnInit, Inject } from '@angular/core';
import { UsuarioCreate } from '../../../models/usuarioCreate.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Usuario } from '../../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuarioActualizar } from '../../../models/usuarioActualizar.modelt';


@Component({
  selector: 'app-elminarusuario',
  templateUrl: './elminarusuario.component.html',
  styleUrls: ['./elminarusuario.component.css']
})
export class ElminarusuarioComponent implements OnInit {
  formData: Usuario;
  esHabilitar: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ElminarusuarioComponent>,
    public _usuarioS: UsuarioService) { }
  closeDialogCrearUsuario() {
    this.dialogRef.close();
  }
  ngOnInit() {


    this.formData = {
      userName: this.data.usuarios.userName,
      usuarioId: this.data.usuarios.usuarioId,
      nombre: this.data.usuarios.nombre,
      apellido: this.data.usuarios.apellido,
      correo: this.data.usuarios.correo,
      sandForPassword: this.data.usuarios.sandForPassword,
      rol: this.data.usuarios.rol,
      status: this.data.usuarios.status,
      password: this.data.usuarios.password,
      totalRecords: this.data.usuarios.totalRecords

    };

    this.esHabilitar = this.data.usuarios.status;
    console.log(this.esHabilitar);
  }






  HabilitarOdeabilitar() {



    if (this.esHabilitar) {


      let usuario = new UsuarioActualizar(
        this.formData.nombre,
        this.formData.apellido, false,
        this.formData.correo,
        this.formData.userName,
        this.formData.password,
        this.formData.rol,
        this.formData.usuarioId);
      this._usuarioS.actualizarUsuario(usuario).subscribe((data: any) => {
        // console.log(data);
        this.closeDialogCrearUsuario();


      });

    } else {

      let usuario = new UsuarioActualizar(
        this.formData.nombre,
        this.formData.apellido, true,
        this.formData.correo,
        this.formData.userName,
        this.formData.password,
        this.formData.rol,
        this.formData.usuarioId);
      this._usuarioS.actualizarUsuario(usuario).subscribe((data: any) => {
        // console.log(data);
        this.closeDialogCrearUsuario();


      });

    }


    // console.log(usuario);


  }



}
