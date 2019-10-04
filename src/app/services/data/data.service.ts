// Implementacion de servicio de forma global
export class DataService {
  
  constructor() { }

  getAlumnos(){
    return [
      {
        "nombres": "Adiela",
        "apellidos": "López"
      },
      {
        "nombres": "Rubén",
        "apellidos": "Solano"
      }
    ]
  }
}
