import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';
import { ToastController } from '@ionic/angular';
import { Profesor,Dia,Materia,Tema } from '../../../interfaces/interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  tipoTexto = 'fuente2';
  temas!:Tema[];
  objetivos!:string[];
  nombre!:string;
  correo!:string;
  numEstudiantes!:number;
  hora!:string;
  materia!:Materia;
  nombre_materia!:string;
  malla!:string;
  carrera!:string;
  laboratorio!:string;

  constructor(private data:DatosService,private toastController: ToastController) {
    this.nombre = this.data.getNombre();
    this.correo = this.data.getCorreo();
  }


  ionViewWillEnter(){
    console.log("Entrando a la interfaz");
    this.data.setMateria(16);
    console.log(this.data.getMateria());
  }

  ionViewDidEnter(){
    this.materia = this.data.getMateria();
    this.nombre_materia = this.materia.materia;
    this.malla = this.materia.malla;
    this.carrera = this.materia.carrera;
    this.temas = this.data.getTemas();
    this.numEstudiantes = this.materia.alumnos;
    this.hora = this.materia.horaIni + " - " + this.materia.horaFin;
    this.laboratorio = this.materia.laboratorio;
  }

  ngOnInit() {
  }

  getObjetivos( event:any ){
    let tema = event.detail.value;
    for (let i = 0; i < this.temas.length; i++){
      if (this.temas[i].tema == tema){
        this.objetivos = this.temas[i].objetivos;
      }
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro Exitoso',
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }

  registrar(){
    this.presentToast();
  }

}


