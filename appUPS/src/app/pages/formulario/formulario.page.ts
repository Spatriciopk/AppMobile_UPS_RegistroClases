import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  tipoTexto = 'fuente2';
  temas:any;
  objetivos:any;

  constructor(private data:DatosService) {
  }


  ionViewWillEnter(){
    // console.log(this.data.getData());
    this.data.setDatos("Móviles");
  }

  ionViewDidEnter(){
    this.data.getDatos();
    this.temas = this.data.getTemas();
    console.log(this.temas);
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

}
