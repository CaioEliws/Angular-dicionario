import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Palavra } from '../models/dicionario.model';

@Injectable({ providedIn: 'root' })
export class PalavraService {
  private baseUrl = 'http://localhost:3000/palavras';

  constructor(private http: HttpClient) {}

  obterPalavrasPorDicionario(dicionarioId: string): Observable<Palavra[]> {
    return this.http.get<Palavra[]>(`${this.baseUrl}?dicionarioId=${dicionarioId}`);
  }

  obterPalavraPorId(id: number): Observable<Palavra> {
    return this.http.get<Palavra>(`${this.baseUrl}/${id}`);
  }

  adicionarPalavra(palavra: Palavra): Observable<Palavra> {
    return this.http.post<Palavra>(this.baseUrl, palavra);
  }

  atualizarPalavra(palavra: Palavra): Observable<Palavra> {
    return this.http.put<Palavra>(`${this.baseUrl}/${palavra.id}`, palavra);
  }

  deletarPalavra(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}