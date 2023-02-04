import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GetHome, GetDetailHome } from "../../modules/getDataHomeSale";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { };

  url: string = "/api/";

  getHome(): Observable<GetHome> {
    let direccion = this.url + "list/";
    return this.http.get<GetHome>(direccion);
  }

  getDetailHome(id: any): Observable<GetDetailHome> {
    let direccion = this.url + "detail/"+id;
    return this.http.get<GetDetailHome>(direccion);
  }

}
