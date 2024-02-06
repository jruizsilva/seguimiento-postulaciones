import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
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
import { Router } from '@angular/router';
import { PostulacionesService } from '../../services/postulaciones.service';
import { MatSelectModule } from '@angular/material/select';

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
    MatSelectModule,
  ],
  providers: [PostulacionesService],
  templateUrl: './editar-postulacion.component.html',
  styleUrl: './editar-postulacion.component.scss',
})
export class EditarPostulacionComponent implements OnInit {
  form!: FormGroup;
  postulacionId!: number;
  _postulacionesService = inject(PostulacionesService);
  _formBuilder = inject(FormBuilder);
  _router = inject(Router);

  ngOnInit(): void {
    const postulacion: Postulacion = history.state.postulacion;
    this.postulacionId = postulacion.id;
    this.form = this._formBuilder.group({
      puesto: [postulacion.puesto, Validators.required],
      empresa: [postulacion.empresa, Validators.required],
      plataforma: [postulacion.plataforma, Validators.required],
      enlace: [postulacion.enlace],
      estado: [postulacion.estado, Validators.required],
    });
  }

  updatePostulacion() {
    const postulacionToUpdate: Postulacion = {
      ...this.form.value,
      id: this.postulacionId,
    };
    this._postulacionesService
      .updatePostulacion(postulacionToUpdate)
      .subscribe(() => {
        this.form.reset();
        this._router.navigate(['/postulaciones']);
      });
  }
}
