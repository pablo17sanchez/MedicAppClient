import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SectorService } from '../../../services/sector/sector.service';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Sector } from '../../../models/sector.model';
import { SectorCreate } from '../../../models/sectorCreate.model';

@Component({
  selector: 'app-crear-sector',
  templateUrl: './crear-sector.component.html',
  styleUrls: ['./crear-sector.component.css']
})
export class CrearSectorComponent implements OnInit {
  formData: Sector;
  public forma: FormGroup;

  constructor(public dialogRef: MatDialogRef<CrearSectorComponent>,
    public _sectoService: SectorService) { }

  ngOnInit(): void {


    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      codigopostal: new FormControl(null, Validators.required)

    });
  }
  closeDialogCrearSector() {
    this.dialogRef.close();
  }

  OnSumit(form: NgForm) {
    if (this.forma.invalid) {
      return;

    }
    let sector = new SectorCreate(this.forma.value.nombre,
      true,
      this.forma.value.codigopostal
    );


    // console.log(usuario);
    this._sectoService.crearSector(sector).subscribe((data: any) => {
      console.log(data);
      this.closeDialogCrearSector();


    });


  }

}
