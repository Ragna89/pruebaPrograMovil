import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonAlert } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router,) { }

  ngOnInit() {
  }

  nombre: string = "";
  apellido: string = "";
  rut: string = "";
  carrera: string = "";
  user: string = "";
  pass: string = "";
  public alertButtons = ['OK'];

  registrarUsuario(){
    if (this.nombre.length > 0 && this.apellido.length > 0 && this.rut.length > 0 && this.carrera.length > 0 && this.user.length > 0 && this.pass.length > 0) {
      localStorage.setItem('nombre', this.nombre);
      localStorage.setItem('apellido', this.apellido);
      localStorage.setItem('rut', this.rut);
      localStorage.setItem('carrera', this.carrera);
      localStorage.setItem('user', this.user);
      localStorage.setItem('pass', this.pass);
      this.alertFunc('Éxito', 'El usuario ha sido registrado correctamente')
      this.router.navigateByUrl('login');    
    } else {
      this.alertFunc('Datos Inválidos', 'Ingrese los datos correctamente')
    }
  }

  async alertFunc(headerMsg:string, bodyMsg: string) {
    const alert = await this.alertController.create({
      header: headerMsg,
      message: bodyMsg,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
