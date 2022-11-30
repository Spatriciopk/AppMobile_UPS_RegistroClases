import { Injectable } from '@angular/core';

import { Profesor, Dia, Materia, Tema } from '../../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private nombre!:string;
  private correo!:string;
  private materias!:Materia[];
  private materia!:Materia;

  private persona:Profesor[]=[
    {
      nombre: "Daniel Diaz",
      correo: "ddiaz@ups.edu.ec",
      clave: "admin1234",
      dias: [
        {
          dia: 3,
          materias:[
            {
              materia: "Plataformas Móviles",
              horaIni: 16,
              horaFin: 18,
              malla: "Reajuste",
              carrera: "Computación",
              alumnos: 20,
              laboratorio: "IHM",
              temas: [
                {
                  tema: "Introducción a las plataformas móviles.",
                  objetivos : ["Identifica las arquitecturas para el desarrollo de aplicaciones en dispositivos móviles."]
                },
                {
                  tema: "Arquitectura de aplicaciones móviles.",
                  objetivos : ["Identifica las arquitecturas para el desarrollo de aplicaciones en dispositivos móviles."]
                },
                {
                  tema: "Lenguajes de programación nativos",
                  objetivos : ["Experimenta los diferentes entornos y lenguajes de de aplicaciones móviles"]
                },
                {
                  tema: "Lenguajes de programación multiplataforma.",
                  objetivos : ["Experimenta los diferentes entornos y lenguajes de de aplicaciones móviles"]
                }
              ]
            },
            {
              materia: "Móviles",
              horaIni: 18,
              horaFin: 20,
              malla: "Rediseño",
              carrera: "Computación",
              alumnos: 30,
              laboratorio: "IHM",
              temas: [
                {
                  tema: "Introducción a las plataformas móviles.",
                  objetivos : ["Identifica las arquitecturas para el desarrollo de aplicaciones en dispositivos móviles."]
                },
                {
                  tema: "Arquitectura de aplicaciones móviles.",
                  objetivos : ["Identifica las arquitecturas para el desarrollo de aplicaciones en dispositivos móviles."]
                },
                {
                  tema: "Lenguajes de programación nativos",
                  objetivos : ["Experimenta los diferentes entornos y lenguajes de de aplicaciones móviles"]
                },
                {
                  tema: "Lenguajes de programación multiplataforma.",
                  objetivos : ["Experimenta los diferentes entornos y lenguajes de de aplicaciones móviles"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      nombre: "Viviana Tixilima",
      correo: "vtixilima@ups.edu.ec",
      clave: "admin123",
      dias: []
    }
  ]

  constructor() { 

  }

  getPersona(correo: string){
    return {
      ...this.persona.find(p => {
        return p.correo == correo;
      })
    }
  }

  setInformation(correo: string,dia: number){
    let data = this.persona.find( p => {
      return p.correo == correo;
    })

    let data1 = data!.dias.find( p => {
      return p.dia == dia;
    })

    this.materias = data1!.materias;
  }

  setMateria(inicio:number){
    this.materias.find(p => {
      if (p.horaIni == inicio){
        this.materia = p;
      }
    })
  }

  getMateria(){
    return this.materia;
  }

  getTemas(){
    return this.materia.temas;
  }  

  setNombre(nombre: any){
      this.nombre = nombre;
  }

  getNombre(){
    return this.nombre;
  }


  setCorreo(correo: any){
    this.correo = correo;
  }

  getCorreo(){
    return this.correo;
  }

}
