import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStore } from '../app-store';

@Injectable()
export class RoundsService {

  constructor(private http: HttpClient) { }

  getMoves(): Observable<Move[]> {
    return this.http.get(AppStore.API_URL + 'api/move/moves', {}) as Observable<Move[]>;
  }

  setRound(params): Observable<Game> {
    return this.http.post(AppStore.API_URL + 'api/game/setRound',
    params
    ) as Observable<Game>;
  }
}
