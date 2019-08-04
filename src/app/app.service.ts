import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppStore } from './app-store';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getConfiguration() {
        return this.http.get('./config.json').subscribe((result: any) => {
            AppStore.API_URL = result.api_url;
        });
    }
}
