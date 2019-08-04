import { Component, OnInit } from '@angular/core';
import { RoundsService } from './rounds.service';
import { AppStore } from '../app-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss'],
  providers: [RoundsService]
})
export class RoundsComponent implements OnInit {

  actualPlayerValue = 1;
  moveOne: Move;
  moveTwo: Move;
  moves: Move[];
  rounds: Round[] = [];
  winner: number;

  get actualPlayer(): string {
    return this.actualPlayerValue === 1 ? this.PlayerOne : this.PlayerTwo;
  }

  get PlayerOne(): string {
    return AppStore.GAME.playerOne.name;
  }

  get PlayerTwo(): string {
    return AppStore.GAME.playerTwo.name;
  }

  get scoreOne(): number {
    return AppStore.GAME.playerOne.score;
  }

  get scoreTwo(): number {
    return AppStore.GAME.playerTwo.score;
  }

  get faceOne(): string {
    return this.scoreOne >= this.scoreTwo ? 'fa-smile-beam' : 'fa-sad-tear';
  }

  get faceTwo(): string {
    return this.scoreTwo >= this.scoreOne ? 'fa-smile-beam' : 'fa-sad-tear';
  }

  constructor(private service: RoundsService, private router: Router) { }

  ngOnInit() {
    if (!AppStore.GAME) {
      this.playAgain();
    }
    this.showScore(AppStore.GAME.rounds);
    setTimeout(() => {
      this.service.getMoves().subscribe((data: Move[]) => {
        this.moves = data;
      }, error => {

      });
    });
  }

  onSelectMove(move: Move) {
    if (this.actualPlayerValue === 1) {
      this.moveOne = move;
      this.actualPlayerValue = 2;
    } else {
      this.moveTwo = move;
      const params = {
        id: 0,
        gameId: AppStore.GAME.id,
        playerOneMoveId: this.moveOne.id,
        playerTwoMoveId: this.moveTwo.id,
      };
      this.service.setRound(params).subscribe((data: Game) => {
        this.actualPlayerValue = 1;
        AppStore.GAME = data;
        if (AppStore.GAME.gameWinnerId && AppStore.GAME.gameWinnerId > 0) {
          this.winner = AppStore.GAME.gameWinnerId;
        }
        this.showScore(AppStore.GAME.rounds);
      }, error => {

      });
    }
  }

  showScore(score: Round[]) {
    if (score) {
      this.rounds = score;
    }
  }

  getMoveName(id: number) {
    return this.moves.find(m => m.id === id).name;
  }

  getPlayerName(id: number) {
    return AppStore.GAME.playerOne.id === id ? AppStore.GAME.playerOne.name :
    AppStore.GAME.playerTwo.id === id ? AppStore.GAME.playerTwo.name : '';
  }

  playAgain() {
    this.router.navigate(['/registration']);
  }

}
