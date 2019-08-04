import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-setting';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getConfiguration() {
        return this.http.get('./config.json').subscribe((result: any) => {
            AppSettings.API_URL = result['api_url'];
        });
    }
}
