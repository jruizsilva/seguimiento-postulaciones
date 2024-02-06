import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PostulacionesService } from '../../../services/postulaciones.service';

@Component({
  selector: 'app-menu-reportes',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  providers: [PostulacionesService],
  templateUrl: './menu-reportes.component.html',
  styleUrl: './menu-reportes.component.scss',
})
export class MenuReportesComponent {
  _postulacionesService = inject(PostulacionesService);

  descargarExcel() {
    this._postulacionesService.getExcel().subscribe((blob) => {
      console.log(blob);
    });
  }
  descargarPdf() {
    console.log('descargarPdf');
    this._postulacionesService.getPdf().subscribe((blob: Blob) => {
      console.log(blob);
      // Crear un objeto de URL para el blob
      const url = window.URL.createObjectURL(blob);

      // Crear un elemento de enlace invisible
      const a = document.createElement('a');
      a.href = url;
      a.download = 'archivo.pdf';

      // Adjuntar el enlace al DOM y hacer clic para iniciar la descarga
      document.body.appendChild(a);
      a.click();

      // Eliminar el enlace del DOM después de la descarga
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
