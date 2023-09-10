import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datosclase',
  templateUrl: './datosclase.page.html',
  styleUrls: ['./datosclase.page.scss'],
})
export class DatosclasePage implements OnInit {
  qrData: string= "";
  nombreGuardado = localStorage.getItem('nombre');
  apellidoGuardado = localStorage.getItem('apellido'); 
  rutGuardado = localStorage.getItem('rut'); 
  carreraGuardada = localStorage.getItem('carrera'); 

  constructor(private router: Router) { }

  async ngOnInit() {
    this.qrData = localStorage.getItem('qrData')||'';
  }

}
