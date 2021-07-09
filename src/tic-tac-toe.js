class TicTacToe {
  constructor() {
      this.matrix = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
      ];
      this.currentPlayerSymbol = 'x';
  }

  switchPlayer() {
      if (this.currPlayer === 'x') {
          this.currPlayer = 'o';
      } else if (this.currPlayer === 'o') {
          this.currPlayer = 'x';
      }
  }

  getCurrentPlayerSymbol() {
      return this.currPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] === null) {
          this.matrix[rowIndex][columnIndex] = this.currPlayer;
          this.switchPlayer();
      } 
  }

  isFinished() {
      if ((this.getWinner() === 'x') ||
          (this.getWinner() === 'o') ||
          (this.noMoreTurns() === true)) {
          return true;
      }
      return false;
  }

  getWinner() {
      let winner = null;

      if (this.matrix[0][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][2] === 'o') { winner = 'o'; }
      if (this.matrix[2][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[0][2] === 'o') { winner = 'o'; }
      if (this.matrix[0][0] === 'o' && this.matrix[0][1] === 'o' && this.matrix[0][2] === 'o') { winner = 'o'; }
      if (this.matrix[0][0] === 'o' && this.matrix[1][0] === 'o' && this.matrix[2][0] === 'o') { winner = 'o'; }
      if (this.matrix[0][1] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][1] === 'o') { winner = 'o'; }
      if (this.matrix[0][2] === 'o' && this.matrix[1][2] === 'o' && this.matrix[2][2] === 'o') { winner = 'o'; }
      if (this.matrix[2][0] === 'o' && this.matrix[2][1] === 'o' && this.matrix[2][2] === 'o') { winner = 'o'; }
      if (this.matrix[1][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[1][2] === 'o') { winner = 'o'; }

      if (this.matrix[2][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[0][2] === 'x') { winner = 'x'; }
      if (this.matrix[0][0] === 'x' && this.matrix[0][1] === 'x' && this.matrix[0][2] === 'x') { winner = 'x'; }
      if (this.matrix[0][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][2] === 'x') { winner = 'x'; }
      if (this.matrix[0][0] === 'x' && this.matrix[1][0] === 'x' && this.matrix[2][0] === 'x') { winner = 'x'; }
      if (this.matrix[0][1] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][1] === 'x') { winner = 'x'; }
      if (this.matrix[0][2] === 'x' && this.matrix[1][2] === 'x' && this.matrix[2][2] === 'x') { winner = 'x'; }
      if (this.matrix[2][0] === 'x' && this.matrix[2][1] === 'x' && this.matrix[2][2] === 'x') { winner = 'x'; }
      if (this.matrix[1][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[1][2] === 'x') { winner = 'x'; }

      return winner;
  }

  noMoreTurns() {
      for (let i = 0; i < this.matrix.length; i++) {
          for (let j = 0; j < this.matrix[i].length; j++) {
              if (this.matrix[i][j] === null) {
                  return false;
              }
          }
      }
      return true;
  }

  isDraw() {
      if ((this.noMoreTurns() === true) &&
          (this.getWinner() === null)) {
          return true;
      }
      return false;
  }

  getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
