import { Component } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  correo:any;
  clave:any;
  
  constructor(private datos: DatosService, private toastController: ToastController,private router: Router) {
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Campos Obligatorios',
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Credenciales Incorrectas',
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }
  ingresar(){
      var clave = this.datos.getPersona(this.correo).clave;
      var correo = this.datos.getPersona(this.correo).correo;
      if(typeof correo === 'undefined' || typeof clave === 'undefined'){
        this.presentToast();
      }
      else if ( clave != this.clave){
        this.presentToast2();
      }
      else{
        this.router.navigate(['formulario']);
        //window.location.href ="../pages/formulario/formulario.page.html";
        //console.log("Bienvenido");
      }

      }
  }

