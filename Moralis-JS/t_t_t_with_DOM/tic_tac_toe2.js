

function renderBoard(board) {


  let innerHtml = `<pre>${getBoardString(board)}</pre>`
  document.querySelector(".js-container").innerHTML = innerHtml;
}

function getBoardString(gameBoard) {
  let boardString = '';
  // for(let i=0; i<gameBoard.length; i+=3) {
  //   boardString += `${gameBoard[i] === 'null' ? i+1 : gameBoard[i]}
  //   ${gameBoard[i + 1] === 'null' ? i+2 : gameBoard[i+1]}
  //   ${gameBoard[i + 2] === 'null' ? i+3 : gameBoard[i+2]} /n`;
  // }
  for (let i = 0; i < gameBoard.length; i += 1) {
    boardString += `${gameBoard[i] ?? i + 1}`;
    if (i % 3 === 2) {
      boardString += '\n';
    }
  }

  return boardString;
}


function getUserInput(nextPlayerSymbol, gameBoard) {

  for (let index = 0; index < 10; index++) {

    let number_cell = index + 1;
    /* escaping twice (javascript and querySelector), 3 to transform e.g. 1 unicode, OR use getElementById :-D */
    const $clicked_button = document.body.querySelector(`#\\3${number_cell} `);
    $clicked_button.addEventListener("click", (e) => { $clicked_button.innerHTML = `${number_cell}`; });
    return number_cell;
  }

}

/*
function getUserInput(nextPlayerSymbol, gameBoard) {
  return +prompt(`Board:\n${getBoardString(gameBoard)}: '${nextPlayerSymbol}': choose your coordinate: 0,..,8`); //the + transforms the string into a number
}

// getUserInput('O', [null, null, 'O', null, null, 'O', null, null, 'O'])

*/

function isMoveValid(move, gameBoard) {
  const boardIndex = move - 1;

  return (
    gameBoard[boardIndex] === null && [0, 1, 2, 3, 4, 5, 6, 7, 8].includes(move)
  )
}

function makeAMove(gameBoard, nextPlayerSymbol) {

  // clone the game board before placing moves in it
  let newGameBoard = JSON.parse(JSON.stringify(gameBoard));
  // const newGameBoard = [...gameBoard]; /**solution by Zsolt */

  let move;
  do {
    move = getUserInput(nextPlayerSymbol, gameBoard);
  } while (!isMoveValid(move, gameBoard));
  const boardIndex = move - 1;
  newGameBoard[boardIndex] = nextPlayerSymbol;
  renderBoard(newGameBoard);
  return newGameBoard;
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
  if (hasLastMoverWon(currentPlayerSymbol, gameBoard)) {
    // Write a message that last mover has won the game
    alert(`Congratulations, ${currentPlayerSymbol} has won the game`);
    return true;
  }

  // 2. check if the board is full
  // if draw { alert:  ; return true }
  if (gameBoard.every(element => element !== null)) {
    alert('Draw.');
    return true;
  }

  return false;

  // Return: winner/draw OR game is still in progress
}

function ticTacToe() {
  // State space
  let gameBoard = new Array(9).fill(null);
  let currentPlayerSymbol = null;

  // Computations
  do {
    currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X';
    gameBoard = makeAMove(gameBoard, currentPlayerSymbol);
  } while (!isGameOver(gameBoard, currentPlayerSymbol));

  // Return value
  // return undefined;
}

ticTacToe();
