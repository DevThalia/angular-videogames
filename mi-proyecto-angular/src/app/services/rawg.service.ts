import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  private apiUrl = 'https://api.rawg.io/api/games?key=239d178559b64d9588abcb5561a43ee2';

  constructor(private http: HttpClient) { }

  getGamesFromUrl(url: string): Observable<{ results: Game[] }> {
    return this.http.get<{ results: Game[] }>(url); 
  }
}
