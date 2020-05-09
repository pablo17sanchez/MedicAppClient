import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/paciente/paciente.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  paciente: Paciente[] = [];
  pagina: number = 1;

  // tslint:disable-next-line:member-ordering
  totalRegistros: number = 0;
  // tslint:disable-next-line:member-ordering
  cargando: boolean = true;
  constructor(public _pacienteS: PacienteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarPaciente();
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
    this.cargarPaciente();

  }
  cargarPaciente() {

    this.cargando = true;

    this._pacienteS.cargarPacientes(this.pagina)
      .subscribe((resp: any) => {

        this.paciente = resp;
        if (this.paciente.length > 0) {
          this.totalRegistros = resp[0].totalRecords;
        }

        this.cargando = false;

      });

  }

}
