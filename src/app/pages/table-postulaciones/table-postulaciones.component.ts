import { DatePipe, TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { PostulacionesService } from '../../services/postulaciones.service';
import { MenuReportesComponent } from './menu-reportes/menu-reportes.component';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table-postulaciones',
  styleUrls: ['./table-postulaciones.component.scss'],
  templateUrl: './table-postulaciones.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
    HttpClientModule,
    DatePipe,
    TitleCasePipe,
    MenuReportesComponent,
  ],
  providers: [PostulacionesService],
})
export class TablePostulacionesComponent implements OnInit {
  displayedColumns: string[] = [
    'puesto',
    'empresa',
    'plataforma',
    'enlace',
    'fecha',
    'estado',
    'acciones',
  ];
  dataSource!: MatTableDataSource<Postulacion>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  _postulacionesService = inject(PostulacionesService);
  _intl = inject(MatPaginatorIntl);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _router = inject(Router);

  ngOnInit(): void {
    this._postulacionesService.getAllPostulaciones().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePostulacion(id: number) {
    if (confirm('¿Esta seguro que desea eliminar la postulación?')) {
      this._postulacionesService
        .deletePostulacionById(id.toString())
        .subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(
            (postulacion) => postulacion.id !== id
          );
        });
    }
  }

  editPostulacion(postulacion: Postulacion) {
    this._router.navigate(['/editar-postulacion', postulacion.id], {
      state: {
        postulacion,
      },
    });
  }
}
