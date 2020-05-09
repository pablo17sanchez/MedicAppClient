import { Component, OnInit } from '@angular/core';
import { Ars } from '../../models/ars.model';
import { ArsService } from '../../services/ars/ars.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrearArsComponent } from './crear-ars/crear-ars.component';

@Component({
  selector: 'app-ars',
  templateUrl: './ars.component.html',
  styleUrls: ['./ars.component.css']
})
export class ArsComponent implements OnInit {
  ars: Ars[] = [];
  pagina: number = 1;

  // tslint:disable-next-line:member-ordering
  totalRegistros: number = 0;
  // tslint:disable-next-line:member-ordering
  cargando: boolean = true;
  constructor(public _arsService: ArsService, private dialog: MatDialog) {


    this.cargarArs();
   }


  cargarArs() {

    this.cargando = true;

    this._arsService.cargarArs(this.pagina)
      .subscribe((resp: any) => {

        this.ars = resp;
        if (this.ars.length > 0) {
          this.totalRegistros = resp[0].totalRecords;
        }

        console.log(resp);


        this.cargando = false;

      });

  }
  ngOnInit(): void {
  }

  AddProvincia() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    this.dialog.open(CrearArsComponent, dialogConfig).afterClosed().subscribe(res => {

      this.cargarArs();
    });



  }


}
