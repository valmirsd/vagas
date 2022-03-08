import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { observable, Observable } from 'rxjs';
import { Vaga } from './models/Vagas.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";
  _urlAtualizar: string | undefined;

  constructor(private _httpClient: HttpClient) { }

  getVagas(): Observable<Vaga[]>{
    return this._httpClient.get<Vaga[]>(this.url);
  }

  cadastroVaga(vaga: Vaga):Observable<Vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url,vaga);
  }
  
  atualizarVagas(id:any, vaga: Vaga):Observable<Vaga[]>{
    const this._urlAtualizar = '${this.url}/${id}';
    return this._httpClient.put<Vaga[]>(urlAtualizar,vaga);
  }
  
  removerVaga(id:any):Observable<Vaga[]>{
    const urlDeletar = '${this.url}/${id}',
    return this._httpClient.delete<Vaga[]>(urlDeletar);
  }
}

function urlAtualizar<T>(urlAtualizar: any, vaga: Vaga): Observable<Vaga[]> {
  throw new Error('Function not implemented.');
}
