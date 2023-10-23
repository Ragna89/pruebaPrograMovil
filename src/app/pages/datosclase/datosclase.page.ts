import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { GeolocationService } from 'src/app/servicios/geolocation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datosclase',
  templateUrl: './datosclase.page.html',
  styleUrls: ['./datosclase.page.scss'],
})
export class DatosclasePage implements OnInit {
  
  
  qrData: string="";
  datosClase: string= "";
  nombreGuardado: string= "";
  apellidoGuardado: string= "";
  rutGuardado: string= "";
  carreraGuardada: string= "";
  fotoGuardada: string= "";

  calle: string= "";
  comuna: string= "";
  region: string= "";
  direccionFinal: string= "";

  latitud: number= 0;
  longitud: number= 0;
  location: any;
  
  constructor(private router: Router, public storage: Storage, private geo: GeolocationService, private http: HttpClient) { }

  async ngOnInit() {
    await this.obtenerData();
    await this.loadLocation();
  }

  obtenerData() {
    this.storage.get('qrData').then(qrGuardado => {
      this.qrData = qrGuardado;
      console.log('qrData', this.qrData)
    });
    this.storage.get('usuario').then(usuarioGuardado => {
      this.nombreGuardado = usuarioGuardado.nombre;
      this.apellidoGuardado = usuarioGuardado.apellido;
      this.rutGuardado = usuarioGuardado.rut;
      this.carreraGuardada = usuarioGuardado.carrera;
      this.fotoGuardada = usuarioGuardado.foto;
    })
  }

  loadLocation(){
    this.location = this.geo.fetchLocation().then(response => {
      this.latitud = response['latitude'];
      this.longitud = response['longitude'];
      this.obtenerDireccionDesdeCoordenadas(this.latitud, this.longitud);
    })
  }

  obtenerDireccionDesdeCoordenadas(latitud: number, longitud: number): void {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitud}&lon=${longitud}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        console.log(data)
        const direccion = data.address;
        this.calle = direccion.road;
        this.comuna = direccion.suburb;
        this.region = direccion.state;
        this.direccionFinal = this.calle +', '+ this.comuna +', '+ this.region
      } else {
        console.error('No se encontró ninguna dirección para las coordenadas proporcionadas.');
      }
    })
    .catch(error => console.error('Error al obtener la dirección:', error));
  }

}
