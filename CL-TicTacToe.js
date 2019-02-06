var board = [[' ', 'O',' '], ['X','X','X'], [' ',' ','O']];
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);

var winConditions = function(board) {
  checkHorizontalWin(board);
  CheckVerticalWin(board);
  CheckDiagonalWin(board);
}

var checkHorizontalWin = function(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      alertWin(board[i][0]);
    }
  }
}

var CheckVerticalWin = function(board) {
  for (var j = 0; j < board.length; j++) {
    if (board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      alertWin(board[0][j]);
    }
  }
}

var CheckDiagonalWin = function(board) {
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    alertWin(board[0][0]);
  } else if (board[2][0] === board[1][1] && board[1][1] === board [2][0]) {
    alertWin(board[2][0]);
  }
}

var alertWin = function(player) {
  console.log(`Player ${player} wins!`);
}

winConditions(board);