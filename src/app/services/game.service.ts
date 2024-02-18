import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  findById = (id : string|null): Observable<Game> => {
    return this.http.get<Game>(`${environment.API_BASE_URL}api/games/` + id);
  }

  generateCustomQuiz = (formData: FormData): Observable<Game> => {
    return this.http.post<Game>(`${environment.API_BASE_URL}api/games/`, formData);
  }



}
