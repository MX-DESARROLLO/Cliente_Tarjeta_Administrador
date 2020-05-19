import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

 
  URI: string = '';
  

  constructor(private http: HttpClient) { 
    this.URI = `http://localhost:3000/api/tarjetas/`
  }

  getClima(country: string) {
    return this.http.get(`${this.URI}${country}`)
  }


}
