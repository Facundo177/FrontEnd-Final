import { Injectable } from '@angular/core';
// suscribirse a los datos y que reciba respuesta asincrona
import { Observable } from 'rxjs';
// Hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // http = alias
  constructor(private http:HttpClient) { }

  // metodo Observable que devuelve datos
  getDatos() : Observable<any> {
    return this.http.get('./assets/db/db.json')
  }
}
