import { Component, OnInit } from '@angular/core';
import { AppStore } from '../app-store';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  error: string;
  constructor() { }

  ngOnInit() {
    this.error = AppStore.ERROR.message;
  }

}
