import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorService } from './sector/sector.service';
import { PacienteService } from './paciente/paciente.service';
import { ArsService } from './ars/ars.service';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService
 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    SectorService,
    PacienteService,
    ArsService
  ],
  declarations: []
})
export class ServiceModule { }
