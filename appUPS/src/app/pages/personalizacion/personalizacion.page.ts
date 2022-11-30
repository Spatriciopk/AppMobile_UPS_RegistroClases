import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../servicios/datos.service';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.page.html',
  styleUrls: ['./personalizacion.page.scss'],
})

export class PersonalizacionPage implements OnInit {

  estilos = [
    {
      nombre:"Tema 1",
      fondo: "tema1-fondo",
      letra: "tema1-letra",
      color: "primary"
    },
    {
      nombre: "Tema 2",
      fondo: "tema2-fondo",
      letra: "tema2-letra",
      color: "tertiary"
    }
  ]

  nombre!:string;

  temaSelect: string = "Tema 1";
  
  fondoSelect:string = "tema1-fondo";
  fuenteSelect:string = "tema1-letra";
  color:string = "primary";

  constructor(private data:DatosService) {
    this.nombre = this.data.getNombre();
  }
  ngOnInit() {}

  updateStyle(){
    this.estilos.find( p => {
      if (p.nombre == this.temaSelect){
        this.fondoSelect = p.fondo;
        this.fuenteSelect = p.letra;
        this.color = p.color;
      }
    })
  }
}
