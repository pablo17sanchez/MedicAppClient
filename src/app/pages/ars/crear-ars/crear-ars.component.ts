import { Component, OnInit } from '@angular/core';
import { Ars } from '../../../models/ars.model';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ArsService } from '../../../services/ars/ars.service';

@Component({
  selector: 'app-crear-ars',
  templateUrl: './crear-ars.component.html',
  styleUrls: ['./crear-ars.component.css']
})
export class CrearArsComponent implements OnInit {

  formData: Ars;
  public forma: FormGroup;
  constructor(public dialogRef: MatDialogRef<CrearArsComponent>,
    public arsService: ArsService) { }

  ngOnInit(): void {
  }

}
