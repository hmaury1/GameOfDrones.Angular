import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { RoundsComponent } from './rounds/rounds.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'rounds',
    component: RoundsComponent
  },
  {
    path: 'registration',
    component: RegisterPlayerComponent
  },
  {
    path: '',
    redirectTo: '/registration',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
