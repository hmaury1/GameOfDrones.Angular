import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoundsComponent } from './rounds/rounds.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPlayerComponent,
    RoundsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    {
      provide: APP_INITIALIZER,
      useFactory: function configServiceFactory(config: AppService) {
        return () => {
          config.getConfiguration();
        };
      },
      deps: [AppService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
