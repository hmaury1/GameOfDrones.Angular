import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStore } from '../app-store';

@Injectable()
export class RegisterPlayerService {

  constructor(private http: HttpClient) { }

  start(playerOneName: string, playerTwoName: string): Observable<Game> {
    return this.http.post(AppStore.API_URL + 'api/game/start',
    {
        playerOneName,
        playerTwoName
    }
    ) as Observable<Game>;
  }
}
