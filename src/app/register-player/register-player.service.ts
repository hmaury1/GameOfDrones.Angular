import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-setting';

@Injectable()
export class RegisterPlayerService {

  constructor(private http: HttpClient) { }

  start(playerOneName: string, playerTwoName: string): Observable<any[]> {
    return this.http.post(AppSettings.API_URL + 'api/game/start',
    {
        playerOneName,
        playerTwoName
    },
    {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    ) as Observable<any>;
  }
}
