// Tic tac toe prompt - console two player game

function getUserInput(nextPlayerSymbol) {

}

function isMoveValid(coordinates, gameBoard) {

}

function makeAMove(gameBoard, nextPlayerSymbol) {
  // clone the game board, before placing moving in it
  do {
    let coordinates = getUserInput();
  } while ( !isMoveValid(coordinates, gameBoard) );
  // return newGameBoard;
}

function isGameOver(gameBoard) {
  // 1. check if there is a winner
  // 2. check if the board is full
  // return: winner/draw, OR game still ongoing
}

function ticTacToe() {
  // state space
  let gameBoard = ???;
  let players = ['X', 'O'];
  let nextPlayerIndex = 0;

  // Computations


  while ( !isGameOver() ) {
    gameBoard = makeAMove(gameBoard, nextPlayerSymbol);
  }





}
