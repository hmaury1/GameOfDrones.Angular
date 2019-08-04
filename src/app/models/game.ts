interface Game {
    playerOne: Player;
    playerTwo: Player;
    gameWinner: any;
    id: number;
    playerOneId: number;
    playerTwoId: number;
    gameWinnerId: number;
    createdOn: Date;
    rounds: Round[]
}