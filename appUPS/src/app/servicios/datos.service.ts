import { Injectable } from '@angular/core';

import { Carreras,MallasEntity,MateriasEntity,Horario,TemasEntity } from '../../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private json_ele!:Carreras[];
  private carrera!:string;
  private malla!:string;
  private materia!: MateriasEntity;

  private persona = [
    {
      nombre: "Daniel Diaz",
      correo: "ddiaz@ups.edu.ec",
      clave: "admin1234",
      carreras:[
        {
          carrera: "Computacion",
          mallas:[ 
            {
              malla: "Reajuste",
              materias: [
                {
                  materia: "Plataformas Móviles",
                  horario: {
                    dias: ["Martes","Miercoles"],
                    horas: ["16:00 - 18:00","18:00 - 20:22"] 
                  },
                  laboratorio: "IHM",
                  alumnos: 15,
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
            },
            {
              malla: "Rediseño",
              materias: [
                {
                  materia: "Móviles",
                  horario: {
                    dias: ["Martes","Miercoles"],
                    horas: ["16:00 - 18:00","18:00 - 20:22"] 
                  },
                  laboratorio: "IHM",
                  alumnos: 15,
                  temas: [
                    {
                      tema: "Introducción a las plataformas móviles.",
                      objetivos : ["Identifica las arquitecturas para el desarrollo de aplicaciones en dispositivos móviles.","2","3"]
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
          carrera: "Sistemas",
          mallas:[ 
            {
              malla: "Reajuste",
              materias: [
                {
                  materia: "Telefonos",
                  horario: {
                    dias: ["Martes","Miercoles"],
                    horas: ["16:00 - 18:00","18:00 - 20:00"] 
                  },
                  laboratorio: "IHM",
                  alumnos: 15,
                  temas: [
                    {
                      tema: "Introducción a las plataformas móviles.",
                      objetivos : ["Identifica las arquitecturas para el desarrollo de aplicaciones en dispositivos móviles.","2"]
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
        }
      ]
    },
    {
      nombre: "Viviana Tixilima",
      correo: "vtixilima@ups.edu.ec",
      clave: "admin123",
      carreras: []
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

  setData(data:any){
    this.json_ele = data;
  }

  getData(){
    return this.json_ele;
  }

  setDatos(materia:string){
    let encontro = false;
    // for (let i = 0; i< this.json_ele.length;i++){
      this.json_ele.find(p => {
        for (let i = 0; i<p.mallas!.length;i++){
          // console.log(p.mallas![i].materias.materia);
          for (let j = 0; j < p.mallas![i].materias!.length; j++){
            console.log(p.mallas![i].materias![j]);
            if (p.mallas![i].materias![j].materia == materia){
              console.log("Es igual");
              this.carrera = p.carrera;
              this.malla = p.mallas![i].malla;
              this.materia = p.mallas![i].materias![j];
            }
          }  
        }
      })
    }

    getDatos(){
      console.log(this.carrera);
      console.log(this.malla);
      console.log(this.materia);
    }

  getTemas(){
    return this.materia.temas;
  }  

}
