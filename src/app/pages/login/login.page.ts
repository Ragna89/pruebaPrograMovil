import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonAlert } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router,) { }
  user: string = "";
  pass: string = "";

  ngOnInit() {

  }

  inicioSesion() {
    const userGuardado = localStorage.getItem('user');
    const passGuardada = localStorage.getItem('pass');
  
    if (this.user.length > 0 && this.pass.length > 0) {

      if (this.user === userGuardado && this.pass === passGuardada) {

        this.router.navigateByUrl('lector-qr');

      } else {
        
        this.alertFunc('Error', 'El Usuario y/o la Contraseña ingresados son incorrectos');

      }
    } else {

      this.alertFunc('Ingrese Usuario y/o Contraseña', 'Porfavor ingrese los datos correspondientes');
      
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
