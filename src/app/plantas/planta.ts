export class Planta {
  nombre_comun: string;
  tipo: string;
  clima: string;

  public constructor(nombre_comun: string, tipo: string, clima: string) {
    this.nombre_comun = nombre_comun;
    this.tipo = tipo;
    this.clima = clima;
  }
}
