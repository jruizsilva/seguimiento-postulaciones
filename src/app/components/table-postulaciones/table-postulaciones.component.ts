import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { postulacionesMock } from '../../../mocks/postulacionesMock';

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
  ],
})
export class TablePostulacionesComponent implements AfterViewInit {
  displayedColumns: string[] = ['Fecha', 'Empresa', 'Link', 'Estado'];
  dataSource: MatTableDataSource<Postulacion>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _intl: MatPaginatorIntl,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    // Create 100 users
    const postulaciones = postulacionesMock;

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(postulaciones);
    this.sort = new MatSort();
    this.paginator = new MatPaginator(_intl, _changeDetectorRef);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
