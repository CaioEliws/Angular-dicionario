import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dicionario } from '../models/dicionario.model';

@Injectable({ providedIn: 'root' })
export class DicionarioService {
  private baseUrl = 'http://localhost:3000/dicionarios';

  constructor(private http: HttpClient) {}

  obterDicionarios(): Observable<Dicionario[]> {
    return this.http.get<Dicionario[]>(this.baseUrl);
  }

  adicionarDicionario(dicionario: Dicionario): Observable<Dicionario> {
    return this.http.post<Dicionario>(this.baseUrl, dicionario);
  }

  atualizarDicionario(id: string, dicionario: Partial<Dicionario>): Observable<Dicionario> {
    return this.http.put<Dicionario>(`${this.baseUrl}/${id}`, dicionario);
  }

  deletarDicionario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
