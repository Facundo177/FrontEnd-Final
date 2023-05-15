export class Educacion {
  id?: number;
  nombre: string;
  descripcion: string;
  img: string;
  link: string;

  constructor(nombre: string, descripcion: string, img: string, link: string){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.img = img;
      this.link = link;
  }
}
