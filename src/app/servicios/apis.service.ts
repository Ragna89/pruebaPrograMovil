import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  urlRegion: string = 'https://dev.matiivilla.cl/duoc/location/region'
  urlComuna: string = 'https://dev.matiivilla.cl/duoc/location/comuna/7'
  urlLocation: string = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitud}&lon=${longitud};'

  constructor(private http: HttpClient) { }

  obtenerListadoRegiones(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlRegion).subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }    
  
  obtenerListadoComunas(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlComuna).subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          reject(err);
        }
      });
    });
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
