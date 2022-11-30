export interface Profesor {
    nombre:  string;
    correo: string;
    clave:  string;
    dias:   Dia[];
}

export interface Dia {
    dia:      number;
    materias: Materia[];
}

export interface Materia {
    materia:     string;
    horaIni:     number;
    horaFin:     number;
    malla:       string;
    carrera:     string;
    alumnos:     number;
    laboratorio: string;
    temas:       Tema[];
}

export interface Tema {
    tema:      string;
    objetivos: string[];
}
  