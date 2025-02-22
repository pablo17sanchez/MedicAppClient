import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        // { titulo: 'Dashboard', url: '/dashboard' },
        // { titulo : 'ProgressBar', url: '/progress' },
        // { titulo: 'Gráficas', url: '/graficas1' },
        // { titulo: 'Promesas', url: '/promesas' },
        // { titulo: 'RxJs', url: '/rxjs' },
        { titulo: 'Usuario', url: '/usuario' },
        { titulo: 'Sectores', url: '/sector' },
        { titulo: 'Provincias', url: '/provincia' },
        { titulo: 'Pacientes', url: '/paciente' },
        { titulo: 'Ars', url: '/ars' },

      ]
    }
  ];

  constructor() { }

}
