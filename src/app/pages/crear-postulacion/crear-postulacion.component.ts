import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostulacionesService } from '../../services/postulaciones.service';

@Component({
  selector: 'app-crear-postulacion',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './crear-postulacion.component.html',
  styleUrl: './crear-postulacion.component.scss',
})
export class CrearPostulacionComponent {
  form: FormGroup;
  _postulacionesService = inject(PostulacionesService);

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      puesto: ['', Validators.required],
      empresa: ['', Validators.required],
      plataforma: ['', Validators.required],
      enlace: [''],
    });
  }

  addPostulacion() {
    const nuevaPostulacion: Postulacion = {
      ...this.form.value,
      fecha: new Date().toLocaleDateString(),
      estado: 'EN_PROCESO',
    };
    console.log(nuevaPostulacion);
    this._postulacionesService.addPostulacion(nuevaPostulacion);
  }
}
