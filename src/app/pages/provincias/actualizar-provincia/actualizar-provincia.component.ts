import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProvinciaService } from '../../../services/provincia/provincia.service';
import { FormGroup, NgForm } from '@angular/forms';
import { ProvinciaCreate } from '../../../models/provinciaCreate.model';

@Component({
  selector: 'app-actualizar-provincia',
  templateUrl: './actualizar-provincia.component.html',
  styleUrls: ['./actualizar-provincia.component.css']
})
export class ActualizarProvinciaComponent implements OnInit {
  formData: ProvinciaCreate;
  public forma: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<ActualizarProvinciaComponent>,
  public _provinciaS: ProvinciaService) { }

  ngOnInit(): void {


    this.formData = {
      nombre: this.data.provincia.nombre,
      status: true,
      provinciaId: this.data.provincia.provinciaId



    };
  }


  OnSumit(form: NgForm) {

    let provincia = new ProvinciaCreate(
      this.formData.nombre,
      true,
       this.formData.provinciaId

    );


    // console.log(usuario);
    this._provinciaS.actualizarProvincia(provincia).subscribe((data: any) => {
      // console.log(data);provincia
      this.closeDialog();


    });

  }

  closeDialog() {
    this.dialogRef.close();
  }



}
