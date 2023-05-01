import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { Heroe } from 'src/app/heroes/interfaces/heroes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroePorId(id: string): Observable<Heroe | undefined> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError( error => of (undefined))
    );
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)
  }

  addHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes/`, heroe);
  }

  updateHeroe(heroe: Heroe): Observable<Heroe> {
    if (!heroe.id) throw Error ('Heroe is is required');
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  deleteHeroe(id: string): Observable<boolean> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      map(resp =>true),
      catchError(err => of (false)),
    );
  }
}
