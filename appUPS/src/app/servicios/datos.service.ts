import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


 private persona = [ {
    correo: "kcadenap1@est.ups.edu.ec",
    clave: "admin1234"
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
}
