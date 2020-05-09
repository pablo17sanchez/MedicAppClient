import { Component, OnInit } from '@angular/core';
import { Sector } from '../../models/sector.model';
import { SectorService } from '../../services/sector/sector.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CrearSectorComponent } from './crear-sector/crear-sector.component';
import { ActualizarSectorComponent } from './actualizar-sector/actualizar-sector.component';
import { EliminarSectorComponent } from './eliminar-sector/eliminar-sector.component';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  sectores: Sector[] = [];
  pagina: number = 1;

  // tslint:disable-next-line:member-ordering
  totalRegistros: number = 0;
  // tslint:disable-next-line:member-ordering
  cargando: boolean = true;

  constructor(public _sectoresS: SectorService, private dialog: MatDialog) { }

  ngOnInit() {
    this.cargarSectore();
  }

  AddUsuario() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    this.dialog.open(CrearSectorComponent, dialogConfig).afterClosed().subscribe(res => {

      this.cargarSectore();
    });



  }

  EditSector(sector: Sector) {
    const dialogConfig = new MatDialogConfig();
     dialogConfig.autoFocus = true;
     dialogConfig.disableClose = true;
     dialogConfig.width = '50%';
     dialogConfig.data = { sector };

     this.dialog.open(ActualizarSectorComponent, dialogConfig).afterClosed().subscribe(res => {
       this.cargarSectore();
     });

   // console.log(usuarios);



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
  this.cargarSectore();

}


DesabilitarOhavilitarUsuario(sector: Sector) {
  const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.disableClose = true;
   dialogConfig.width = '50%';
   dialogConfig.data = { sector };

   this.dialog.open(EliminarSectorComponent, dialogConfig).afterClosed().subscribe(res => {
     this.cargarSectore();
   });
  }
  cargarSectore() {

    this.cargando = true;

    this._sectoresS.cargarSectore(this.pagina)
      .subscribe((resp: any) => {

        this.sectores = resp;

        if (this.sectores.length > 0) {
          console.log(resp[0]);
          this.totalRegistros = resp[0].totalRecords;
        }
        //    this.totalRegistros = resp[0].TotalRecords;
        console.log(resp);

        this.cargando = false;

      });

  }

}
