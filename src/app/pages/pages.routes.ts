import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { ProfileComponent } from './profile/profile.component';


import { LoginGuardGuard } from '../services/service.index';
import { UsuarioComponent } from './usuario/usuario.component';
import { SectorComponent } from './sector/sector.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ArsComponent } from './ars/ars.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
            { path: 'usuario', component: UsuarioComponent, data: { titulo: 'Usuario' } },
            { path: 'sector', component: SectorComponent, data: { titulo: 'Sectores' } },
            { path: 'provincia', component: ProvinciasComponent, data: { titulo: 'Provincia' } },
            { path: 'ars', component: ArsComponent, data: { titulo: 'Ars' } },

            { path: 'paciente', component: PacienteComponent, data: { titulo: 'Paciente' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
