import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  url = 'https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json'
  urlLocation: string = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitud}&lon=${longitud};'

  constructor(private http: HttpClient) { }

  obtenerRegionesYComunas(): Observable<any> {
    return this.http.get(this.url).pipe(
      catchError((error) => {
        console.error('Error al cargar el archivo JSON:', error);
        return of(null);
      })
    );
  }

  obtenerLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlLocation).subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          reject(err);
        }
      })
    })
  }

}
