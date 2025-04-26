import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  private apiUrl = 'https://api.rawg.io/api/games?key=239d178559b64d9588abcb5561a43ee2';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
