// Tic tac toe prompt - console two player game

function getBoardString(gameBoard)  {
  let boardString = '';
  // for(let i=0; i<gameBoard.length; i+3) {
  //   boardString += `${gameBoard[i] === 'null' ? i+1 : gameBoard[i]}
  //   ${gameBoard[i + 1] === 'null' ? i+2 : gameBoard[i+1]}
  //   ${gameBoard[i + 2] === 'null' ? i+3 : gameBoard[i+2]} /n`;
  // }
  for (let i = 0; i < gameBoard.length; i += 1) {
    boardString += `${gameBoard[i] ?? i+1}`;
    if (i % 3 === 2) {
      boardString += '\n';
    }
  }

  return boardString;
}


function getUserInput(nextPlayerSymbol, gameBoard) {
 return +prompt(`Board:\n${getBoardString(gameBoard)}: '${nextPlayerSymbol}': choose your coordinate: 0,..,8`);
}

// getUserInput('O', [null, null, 'O', null, null, 'O', null, null, 'O'])

function isMoveValid(coordinates, gameBoard) {
  if (gameBoard[coordinates] === null && [0,1,2,3,4,5,6,7,8].includes(coordinates) ) {
    return true;
  } else {
    return false;
  }

}

function makeAMove(gameBoard, nextPlayerSymbol) {
  // clone the game board before placing moves in it
  do {
    let coordinates = getUserInput(nextPlayerSymbol, gameBoard);
  } while (!isMoveValid(coordinates, gameBoard));
  gameBoard[coordinates] = nextPlayerSymbol;
  // return newGameBoard;
}

function hasLastMoverWon(lastMove, gameBoard) {
  let winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let [i1, i2, i3] of winnerCombos) {
    if (gameBoard[i1] === lastMove &&
      gameBoard[i1] === gameBoard[i2] &&
      gameBoard[i1] === gameBoard[i3]
    ) {
      return true;
    }
  }
  return false;
}

function isGameOver(gameBoard, currentPlayerSymbol) {
  // 1. check if there is a winner
  if (hasLastMoverWon(lastMove, gameBoard)) {
    // Write a message that last mover has won the game
    alert(`Congratulations, ${currentPlayerSymbol} has won the game`);
    return true;
  }
  // 2. check if the board is full

  // Return: winner/draw OR game is still in progress
}

function ticTacToe() {
  // State space
  let gameBoard = new Array(9).fill(null);
  let players = ['X', 'O'];
  let nextPlayerIndex = 0;

  let indexOfPlayer = Math.floor(Math.random(0,1)*2);
  let currentPlayerSymbol = players[indexOfPlayer];

  // Computations
  do {
    gameBoard = makeAMove(gameBoard, currentPlayerSymbol);
  } while (!isGameOver(gameBoard, currentPlayerSymbol));

  // Return value
  // return undefined;
}

ticTacToe();
