import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProvinciaService } from '../../../services/provincia/provincia.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Provincia } from '../../../models/provincia.model';
import { ProvinciaCreate } from '../../../models/provinciaCreate.model';

@Component({
  selector: 'app-crear-provincia',
  templateUrl: './crear-provincia.component.html',
  styleUrls: ['./crear-provincia.component.css']
})
export class CrearProvinciaComponent implements OnInit {
  formData: Provincia;
  public forma: FormGroup;
  constructor(public dialogRef: MatDialogRef<CrearProvinciaComponent>,
    public _provinciaS: ProvinciaService) { }

  ngOnInit(): void {

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required)

    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  OnSumit(form: NgForm) {
    if (this.forma.invalid) {
      return;

    }

    let provincia = new ProvinciaCreate(this.forma.value.nombre,
      true);


    // console.log(usuario);
    this._provinciaS.crearProvincia(provincia).subscribe((data: any) => {
      this.closeDialog();


    });


  }

}
