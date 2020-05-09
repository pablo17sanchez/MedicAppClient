import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SectorService } from '../../../services/sector/sector.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Sector } from '../../../models/sector.model';
import { SectorCreate } from '../../../models/sectorCreate.model';

@Component({
  selector: 'app-actualizar-sector',
  templateUrl: './actualizar-sector.component.html',
  styleUrls: ['./actualizar-sector.component.css']
})
export class ActualizarSectorComponent implements OnInit {
  formData: SectorCreate;
  public forma: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ActualizarSectorComponent>,
    public _sectorS: SectorService) { }

  ngOnInit(): void {



    this.formData = {
      nombre: this.data.sector.nombre,
      status: true,
      codigoPostal: this.data.sector.codigoPostal,
      sectorId: this.data.sector.sectorId



    };

    // let sector = new SectorCreate(this.forma.value.nombre,
    //   true,
    //   this.forma.value.codigopostal
    // );
  }


  OnSumit(form: NgForm) {

    let sector = new SectorCreate(
      this.formData.nombre,
      true, this.formData.codigoPostal,
       this.formData.sectorId

    );


    // console.log(usuario);
    this._sectorS.actualizarSector(sector).subscribe((data: any) => {
      // console.log(data);
      this.closeDialogCrearSector();


    });

  }

  closeDialogCrearSector() {
    this.dialogRef.close();
  }

}
