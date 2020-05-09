
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { ActualizarUsuarioComponent } from './usuario/actualizar-usuario/actualizar-usuario.component';
import { ElminarusuarioComponent } from './usuario/elminarusuario/elminarusuario.component';
import { SectorComponent } from './sector/sector.component';
import { CrearSectorComponent } from './sector/crear-sector/crear-sector.component';
import { ActualizarSectorComponent } from './sector/actualizar-sector/actualizar-sector.component';
import { EliminarSectorComponent } from './sector/eliminar-sector/eliminar-sector.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { CrearProvinciaComponent } from './provincias/crear-provincia/crear-provincia.component';
import { ActualizarProvinciaComponent } from './provincias/actualizar-provincia/actualizar-provincia.component';
import { EliminarComponent } from './provincias/eliminar/eliminar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { CrearPacienteComponent } from './paciente/crear-paciente/crear-paciente.component';
import { ActualizarPacienteComponent } from './paciente/actualizar-paciente/actualizar-paciente.component';
import { ElimiarPacienteComponent } from './paciente/elimiar-paciente/elimiar-paciente.component';
import { ArsComponent } from './ars/ars.component';
import { CrearArsComponent } from './ars/crear-ars/crear-ars.component';
import { EliminarArsComponent } from './ars/eliminar-ars/eliminar-ars.component';
import { ActualizarArsComponent } from './ars/actualizar-ars/actualizar-ars.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,

        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuarioComponent,
        CrearUsuarioComponent,
        ActualizarUsuarioComponent,
        ElminarusuarioComponent,
        SectorComponent,
        CrearSectorComponent,
        ActualizarSectorComponent,
        EliminarSectorComponent,
        ProvinciasComponent,
        CrearProvinciaComponent,
        ActualizarProvinciaComponent,
        EliminarComponent,
        PacienteComponent,
        CrearPacienteComponent,
        ActualizarPacienteComponent,
        ElimiarPacienteComponent,
        ArsComponent,
        CrearArsComponent,
        EliminarArsComponent,
        ActualizarArsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent


    ],
    imports: [
      ReactiveFormsModule,
      BrowserModule,
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        MatDialogModule,

        PipesModule
    ]
})
export class PagesModule { }
