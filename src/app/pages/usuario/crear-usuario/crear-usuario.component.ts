import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { UsuarioCreate } from '../../../models/usuarioCreate.model';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  formData: Usuario;
  public forma: FormGroup;

  constructor(public dialogRef: MatDialogRef<CrearUsuarioComponent>, public _usuarioS: UsuarioService
  ) { }

  ngOnInit() {
    this.forma = new FormGroup({
      username: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      correo: new FormControl(),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      rol: new FormControl()
    }, { validators: this.sonIguales('password', 'password2') });

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
    if (this.forma.invalid) {
      return;

    }
    let usuario = new UsuarioCreate(this.forma.value.nombre,
      this.forma.value.apellido, true,
       this.forma.value.correo,
      this.forma.value.username,
      this.forma.value.password,
       this.forma.value.rol);


     // console.log(usuario);
    this._usuarioS.crearUsuario(usuario).subscribe((data: any) => {
      console.log(data);
      this.closeDialogCrearUsuario();


    });


  }

}
