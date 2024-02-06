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
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

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
    HttpClientModule,
  ],
  providers: [PostulacionesService],
  templateUrl: './crear-postulacion.component.html',
  styleUrl: './crear-postulacion.component.scss',
})
export class CrearPostulacionComponent {
  form: FormGroup;
  _postulacionesService = inject(PostulacionesService);
  _router = inject(Router);

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
    this._postulacionesService
      .addPostulacion(nuevaPostulacion)
      .subscribe((data) => {
        this.form.reset();
        this._router.navigate(['/postulaciones']);
      });
  }
}
