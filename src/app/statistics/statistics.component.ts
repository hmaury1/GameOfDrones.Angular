import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';
import { AppStore } from '../app-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  providers: [StatisticsService]
})
export class StatisticsComponent implements OnInit {

  games: Game[] = [];

  constructor(private service: StatisticsService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.service.getStatistics().subscribe((data: Game[]) => {
        this.games = data;
      }, error => {
        AppStore.ERROR = error;
        this.router.navigate(['/error']);
      });
    });
  }

  getWinner(game: Game) {
    return game.playerOne.id === game.gameWinnerId ? game.playerOne.name : game.playerTwo.name;
  }

}
