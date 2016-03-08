export interface Contacto{
  titular?:string;
  telefono:string;
  correo:string;
}

export class Cervecero {
  constructor(
    public id:any,
    public nombre:string,
    public logo:string,
    public texto:string,
    public imagenes:string[],
    public contacto:Contacto
  ){}

}
