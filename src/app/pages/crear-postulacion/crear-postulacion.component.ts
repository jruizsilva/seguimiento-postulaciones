import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-crear-postulacion',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './crear-postulacion.component.html',
  styleUrl: './crear-postulacion.component.scss',
})
export class CrearPostulacionComponent {}
