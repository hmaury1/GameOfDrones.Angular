import { Component, OnInit } from '@angular/core';

interface Rounds {
  id: number,
  gameId: number,
  roundWinnerId: number,
  roundWinnerName: string,
  playerOneMoveId: number,
  playerOneMoveName: string,
  playerTwoMoveId: number,
  playerTwoMoveName: string
}

@Component({
  selector: 'app-rounds',
  template: `
    <h1>Round {{actualRound || 1}}</h1>
    <p>
      Turn of player {{actualPlayer}}, select your move!
    </p>
    <div *ngIf="false">
      <h3>We have a Winner</h3>
      <p>{{game?.winner || "test"}} is the new Emperor!</p>
      <button class="btn" type="button">Play again</button>
    </div>
    <div class="row">
      <div class="col-xs-6">
        <div class="btn-container" *ngFor="let move of moves; index as i;">
          <i class="far" [ngClass]="move" style="font-size:80px;"></i>
        </div>
      </div>
      <div class="col-xs-6">
        <h2>Score</h2>
        <div class="row">
          <div class="col-xs-3">Round</div>
          <div class="col-xs-3">Player one selection</div>
          <div class="col-xs-3">Player two selection</div>
          <div class="col-xs-3">Player Winner</div>
        </div>
        <div class="row" *ngFor="let round of rounds; index as i;">
          <div class="col-xs-3">{{round.id}}</div>
          <div class="col-xs-3">{{round.playerOneMoveName}}</div>
          <div class="col-xs-3">{{round.playerTwoMoveName}}</div>
          <div class="col-xs-3">{{round.roundWinnerName}}</div>
        </div>  
      </div>  
    </div>
  `,
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

  actualRound: number;

  _actualPlayer: number = 1;

  get actualPlayer(): string {
    return this._actualPlayer == 1 ? "one" : "two";
  }

  moves = [
    "fa-hand-paper",
    "fa-hand-rock",
    "fa-hand-scissors"
  ]

  rounds = [{
    id: 1,
    gameId: 1,
    roundWinnerId: 1,
    roundWinnerName: "string",
    playerOneMoveId: 1,
    playerOneMoveName: "string",
    playerTwoMoveId: 1,
    playerTwoMoveName: "string"
  }]

  constructor() { }

  ngOnInit() {
  }

}
