import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  providers: [StatisticsService]
})
export class StatisticsComponent implements OnInit {

  games: Game[] = [];

  constructor(private service: StatisticsService) { }

  ngOnInit() {
    setTimeout(() => {
      this.service.getStatistics().subscribe((data: Game[]) => {
        this.games = data;
      }, error => {

      });
    });
  }

  getWinner(game: Game) {
    return game.playerOne.id === game.gameWinnerId ? game.playerOne.name : game.playerTwo.name;
  }

}
