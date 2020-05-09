import { Component, OnInit, Inject } from '@angular/core';
import { SectorCreate } from '../../../models/sectorCreate.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SectorService } from '../../../services/sector/sector.service';

@Component({
  selector: 'app-eliminar-sector',
  templateUrl: './eliminar-sector.component.html',
  styleUrls: ['./eliminar-sector.component.css']
})
export class EliminarSectorComponent implements OnInit {
  formData: SectorCreate;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<EliminarSectorComponent>,
  public _sectorS: SectorService) { }

  ngOnInit(): void {

    this.formData = {
      nombre: this.data.sector.nombre,
      status: true,
      codigoPostal: this.data.sector.codigoPostal,
      sectorId: this.data.sector.sectorId



    };
  }


  Elimiar() {




    let sector = new SectorCreate(
      this.formData.nombre,
      false, this.formData.codigoPostal,
       this.formData.sectorId

    );


    // console.log(usuario);
    this._sectorS.actualizarSector(sector).subscribe((data: any) => {
      // console.log(data);
      this.closeDialogCrearSector();


    });


    }


    // console.log(usuario);



    closeDialogCrearSector() {
      this.dialogRef.close();
    }



}
