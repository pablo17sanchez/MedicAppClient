import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../models/provincia.model';
import { ProvinciaService } from '../../services/provincia/provincia.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrearProvinciaComponent } from './crear-provincia/crear-provincia.component';
import { ActualizarProvinciaComponent } from './actualizar-provincia/actualizar-provincia.component';


@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  provincia: Provincia[] = [];
  pagina: number = 1;

  // tslint:disable-next-line:member-ordering
  totalRegistros: number = 0;
  // tslint:disable-next-line:member-ordering
  cargando: boolean = true;
  constructor(public _provinciaS: ProvinciaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarPronvicia();
  }

  cargarPronvicia() {

    this.cargando = true;

    this._provinciaS.cargarProvincias(this.pagina)
      .subscribe((resp: any) => {

        this.provincia = resp;
        if (this.provincia.length > 0) {
          this.totalRegistros = resp[0].totalRecords;
        }
        console.log(resp);

        this.cargando = false;

      });

  }
  cambiarDesde(valor: number) {

    let pagina = this.pagina + valor;

    if (pagina >= this.totalRegistros) {
      return;
    }

    if (pagina < 0) {
      return;
    }

    this.pagina += valor;
    this.cargarPronvicia();

  }



  AddProvincia() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    this.dialog.open(CrearProvinciaComponent, dialogConfig).afterClosed().subscribe(res => {

      this.cargarPronvicia();
    });



  }


  EditProvincia(provincia: Provincia) {
    const dialogConfig = new MatDialogConfig();
     dialogConfig.autoFocus = true;
     dialogConfig.disableClose = true;
     dialogConfig.width = '50%';
     dialogConfig.data = { provincia };

     this.dialog.open(ActualizarProvinciaComponent, dialogConfig).afterClosed().subscribe(res => {
       this.cargarPronvicia();
     });

   // console.log(usuarios);



 }
}
