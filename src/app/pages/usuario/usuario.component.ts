import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  constructor(public _usarioService: UsuarioService, private dialog: MatDialog) { }

  ngOnInit() {
    this.cargarUsuarios();
  }
  // tslint:disable-next-line:member-ordering
  usuarios: Usuario[] = [];
  // tslint:disable-next-line:member-ordering
  pagina: number = 1;

  // tslint:disable-next-line:member-ordering
  totalRegistros: number = 0;
  // tslint:disable-next-line:member-ordering
  cargando: boolean = true;


  cambiarDesde(valor: number) {

    let pagina = this.pagina + valor;

    if (pagina >= this.totalRegistros) {
      return;
    }

    if (pagina < 0) {
      return;
    }

    this.pagina += valor;
    this.cargarUsuarios();

  }



  AddUsuario() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    this.dialog.open(CrearUsuarioComponent, dialogConfig).afterClosed().subscribe(res => {
      //this.updateGrandTotal();
    });



  }


  EditUsuario() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    this.dialog.open(ActualizarUsuarioComponent, dialogConfig).afterClosed().subscribe(res => {
    });



  }
  cargarUsuarios() {

    this.cargando = true;

    this._usarioService.cargarUsuarios(this.pagina)
      .subscribe((resp: any) => {

        // this.totalRegistros = resp.total;
        this.usuarios = resp;
        this.totalRegistros = resp[0].totalRecords;

        this.cargando = false;

      });

  }

}
