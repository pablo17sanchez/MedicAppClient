import { Component, OnInit, Inject } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { UsuarioCreate } from '../../../models/usuarioCreate.model';
import { UsuarioActualizar } from '../../../models/usuarioActualizar.modelt';


@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  formData: Usuario;
  public forma: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ActualizarUsuarioComponent>,
    public _usuarioS: UsuarioService) { }

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
  }


  sonIguales(campo1: string, campo2: string) {



    return (group: FormGroup) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  closeDialogCrearUsuario() {
    this.dialogRef.close();
  }

  OnSumit(form: NgForm) {

    let usuario = new UsuarioActualizar(
      this.formData.nombre,
      this.formData.apellido, true,
      this.formData.correo,
      this.formData.userName,
      this.formData.password,
      this.formData.rol,
      this.formData.usuarioId);


    // console.log(usuario);
    this._usuarioS.actualizarUsuario(usuario).subscribe((data: any) => {
      // console.log(data);
      this.closeDialogCrearUsuario();


    });


  }

}
