import { Routes } from '@angular/router';
import { TablePostulacionesComponent } from './pages/table-postulaciones/table-postulaciones.component';
import { CrearPostulacionComponent } from './pages/crear-postulacion/crear-postulacion.component';
import { EditarPostulacionComponent } from './pages/editar-postulacion/editar-postulacion.component';
import { PostulacionesEspontaneasComponent } from './pages/postulaciones-espontaneas/postulaciones-espontaneas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'postulaciones', pathMatch: 'full' },
  {
    path: 'postulaciones',
    component: TablePostulacionesComponent,
    pathMatch: 'full',
  },
  {
    path: 'postulaciones-espontaneas',
    component: PostulacionesEspontaneasComponent,
    pathMatch: 'full',
  },
  {
    path: 'crear-postulacion',
    component: CrearPostulacionComponent,
    pathMatch: 'full',
  },
  {
    path: 'editar-postulacion/:id',
    component: EditarPostulacionComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'postulaciones', pathMatch: 'full' },
];
