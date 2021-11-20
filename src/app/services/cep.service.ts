import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

constructor(private http: HttpClient) { }

  

  public buscaCeps(cep: string): any{
    return this.http.get("http://viacep.com.br/ws/" + cep + "/json/");
  }
}
