import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostulacionesService {
  baseURL = 'http://localhost:8080/postulaciones';
  _httpClient = inject(HttpClient);

  getAllPostulaciones(): Observable<Postulacion[]> {
    return this._httpClient.get<Postulacion[]>(this.baseURL);
  }
  getPostulacionById(postulacionId: string): Observable<Postulacion> {
    return this._httpClient.get<Postulacion>(
      `${this.baseURL}/${postulacionId}`
    );
  }
  addPostulacion(
    createPostulacionRequest: CreatePostulacionRequest
  ): Observable<Postulacion> {
    return this._httpClient.post<Postulacion>(
      this.baseURL,
      createPostulacionRequest
    );
  }
  updatePostulaction(
    updatePostulacionRequest: UpdatePostulacionRequest
  ): Observable<Postulacion> {
    return this._httpClient.patch<Postulacion>(
      this.baseURL,
      updatePostulacionRequest
    );
  }
  deletePostulacionById(postulacionId: string) {
    this._httpClient.delete(`${this.baseURL}/${postulacionId}`);
  }
}
