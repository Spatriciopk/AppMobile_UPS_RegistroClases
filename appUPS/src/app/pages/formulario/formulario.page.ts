import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';
import { MallasEntity } from '../../../interfaces/interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  tipoTexto = 'fuente2';
  temas:any;
  objetivos:any;
  nombre:any;
  carrera:any;
  malla:any
  materia:any;
  correo:any;
  carreraAc:any;
  mallaAc:any;
  numEstudiantes:any;
  horario:any;

  constructor(private data:DatosService,private toastController: ToastController) {
 
    this.nombre = this.data.getNombre();
    this.correo = this.data.getCorreo();
    //this.data.setCorreo(this.correo);
    //this.data.getDatos();
    //
    this.carrera = this.data.getCarrera(this.correo);
    console.log(this.carrera);
  }


  ionViewWillEnter(){
   
    // console.log(this.data.getData());
    //this.data.setDatos("Móviles");
  }

  ionViewDidEnter(){
    
   /* this.nombre = this.data.getNombre();
    this.correo = this.data.getCorreo();
    this.data.setCorreo(this.correo);
    //this.data.getDatos();
    this.temas = this.data.getTemas();

    this.carrera =this.data.getCarrera(this.correo);*/
   
    //console.log(this.carrera);
    
    //console.log(this.temas);
  }

  ngOnInit() {
  }


  getTemas(event:any){
    let materia = event.detail.value;
    this.data.setDatos(materia);
    for (let i = 0; i < this.carrera.length; i++){
      for (let j = 0; j < this.carrera[i].mallas.length; j++){
        for (let k = 0; k < this.carrera[i].mallas[j].materias.length; k++){
          if (this.carrera[i].mallas[j].malla == this.mallaAc && this.carrera[i].carrera == this.carreraAc && this.carrera[i].mallas[j].materias[k].materia == materia){
            console.log(this.carrera[i].mallas[j].materias[k].alumnos);
            
            this.numEstudiantes = this.carrera[i].mallas[j].materias[k].alumnos;
            this.horario = this.carrera[i].mallas[j].materias[k].horario.horas[0];
         
          }
   
        }

       
      }
    }
    this.temas = this.data.getTemas();
  }
  getObjetivos( event:any ){
   
    let tema = event.detail.value;
    for (let i = 0; i < this.temas.length; i++){
      if (this.temas[i].tema == tema){
        this.objetivos = this.temas[i].objetivos;
      }
    }
  }

  getMallas( event:any ){
    let selec = event.detail.value;
    this.carreraAc = selec;
    for (let i = 0; i < this.carrera.length; i++){
      if (this.carrera[i].carrera == selec){
        this.malla = this.carrera[i].mallas;
        console.log(this.carrera[i].mallas);
      }
    }
  }
  getMateria(event:any){
    let selec = event.detail.value;
    this.mallaAc = selec;
    for (let i = 0; i < this.carrera.length; i++){
      for (let j = 0; j < this.carrera[i].mallas.length; j++){
        if (this.carrera[i].mallas[j].malla == selec && this.carrera[i].carrera == this.carreraAc){
          this.materia = this.carrera[i].mallas[j].materias;
          console.log(this.carrera[i].mallas[j].materias);
        }
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


