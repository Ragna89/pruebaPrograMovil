import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonAlert } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ApisService } from 'src/app/servicios/apis.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router, public storage: Storage, public apis: ApisService) { }

  async ngOnInit() {
    await this.storage.create();
    this.listaRegion();
    this.listaComuna();
  }
  
  listadoRegiones: any = [];
  listadoComunas: any = [];

  usuario={
    nombre: "",
    apellido: "",
    rut: "",
    carrera: "",
    region: "",
    comuna: "",
    user: "",
    pass: "",
    foto: "",
  }

  currentStep = 1;

  public alertButtons = ['OK'];

  previousStep() {
    this.currentStep--;
  }

  nextStep() {
    this.currentStep++;
  }

  registrarUsuario(){
    if (this.usuario.nombre.length > 0 && this.usuario.apellido.length > 0 && this.usuario.rut.length > 0 && this.usuario.carrera.length > 0 && this.usuario.region.length > 0 && this.usuario.comuna.length > 0 && this.usuario.user.length > 0 && this.usuario.pass.length > 0) {
    
      this.storage.set('usuario', this.usuario);
      console.log('Usuario guardado', this.usuario)
    
      this.alertFunc('Éxito', 'El usuario ha sido registrado correctamente')
      this.router.navigateByUrl('login');    
    } else {
      this.alertFunc('Datos Inválidos', 'Ingrese los datos correctamente')
    }
  }

  listaRegion() {
    this.apis.obtenerListadoRegiones().then((respuesta) => {
        this.listadoRegiones = respuesta.data;
        console.log(respuesta, this.listadoRegiones)
    });
  }

  listaComuna() {
    this.apis.obtenerListadoComunas().then((respuesta) => {
      this.listadoComunas = respuesta.data;
      console.log(respuesta, this.listadoComunas)
    })
  }

  async tomarSelfie() {
    
    const selfie = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType:CameraResultType.Base64,
      source:CameraSource.Camera //Photo o prompt
      
    });

    if(selfie) {
      if(selfie.base64String) {  
        this.usuario.foto = 'data:image/jpeg;base64,' + selfie.base64String;
      } else {
        this.alertFunc('Error', 'No se pudo obtener la imagen.')
      }
    } else {
      this.alertFunc('Error', 'No se pudo tomar la imagen')
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
