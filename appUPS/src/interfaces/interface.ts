export interface Carreras {
    carrera: string;
    mallas?: (MallasEntity)[] | null;
  }
  export interface MallasEntity {
    malla: string;
    materias?: (MateriasEntity)[] | null;
  }
  export interface MateriasEntity {
    materia: string;
    horario: Horario;
    laboratorio: string;
    alumnos: number;
    temas?: (TemasEntity)[] | null;
  }
  export interface Horario {
    dias?: (string)[] | null;
    horas?: (string)[] | null;
  }
  export interface TemasEntity {
    tema: string;
    objetivos?: (string)[] | null;
  }
  