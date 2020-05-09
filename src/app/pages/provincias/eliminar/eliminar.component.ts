import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProvinciaService } from '../../../services/provincia/provincia.service';
import { ProvinciaCreate } from '../../../models/provinciaCreate.model';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  formData: ProvinciaCreate;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<EliminarComponent>,
  public _provinciaS: ProvinciaService) { }

  ngOnInit(): void {



    this.formData = {
      nombre: this.data.provincia.nombre,
      status: true,
      provinciaId: this.data.provincia.provinciaId



    };
  }

  Elimiar() {




    let provincia = new ProvinciaCreate(
      this.formData.nombre,
      false,
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
