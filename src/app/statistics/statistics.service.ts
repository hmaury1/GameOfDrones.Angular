import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppStore } from '../app-store';

@Injectable()
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<Game[]> {
    return this.http.get(AppStore.API_URL + 'api/game/statistics', {}) as Observable<Game[]>;
  }
}
