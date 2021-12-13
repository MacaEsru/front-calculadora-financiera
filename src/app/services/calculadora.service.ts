import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  private base_url = 'http://127.0.0.1:3000/api/v1/calculadora'

  constructor(private http: HttpClient) {

  } 
  createMargen(costoproducto: any, precioventa: any){
    return this.http.post('http://localhost:3000/api/v1/calculadora/margen', {costoproducto, precioventa});
  }

  createCosto(margen: any, precioventa: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/v1/calculadora/costo', {margen, precioventa});
  }

  createNuevoPrecio(costoproducto: any, margen: any, iva: any){
    return this.http.post('http://localhost:3000/api/v1/calculadora/nuevoprecio', {costoproducto, margen, iva});
  }
}
