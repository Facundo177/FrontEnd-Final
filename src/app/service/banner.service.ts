import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banner } from '../model/banner';


@Injectable({
  providedIn: 'root'
})

export class BannerService {
  URL = environment.URL + "banner/";

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.URL + `detail/${id}`);
  }

/*  public save(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Persona);
  }*/

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, banner);
  }

/*  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/

}
