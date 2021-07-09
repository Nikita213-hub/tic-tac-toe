class TicTacToe {

  constructor() {
      this.currentPlayer = 'x';
      this.arr= TicTacToe.createMatrix(3, 3, null);
      this.gridScore = TicTacToe.createMatrix(2 * 3 + 2, 1, 0);
  }

  getCurrentPlayerSymbol() {
      return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
      let currentVal = this.getFieldValue(rowIndex, columnIndex);
      if (currentVal != null) {
          return;
      }
      this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.addScore(rowIndex, columnIndex, this.getCurrentPlayerSymbol() === 'x' ? 1 : -1);
      this.changePlayer();
  }

  isFinished() {
      return this.getWinner() != null || this.isDraw();
  }

  getWinner() {
      for (let i = 0; i < this.gridScore.length; i++) {
          let scoreItem = this.gridScore[i];
          if (Math.abs(scoreItem) === 3) {
              return scoreItem > 0 ? 'x' : 'o';
          }
      }
      return null;
  }

  noMoreTurns() {
      for (let i = 0; i < this.matrix.length; i++) {
          for (let j = 0; j < this.matrix[i].length; j++) {
              if (this.matrix[i][j] == null) {
                  return false;
              }
          }
      }
      return true;
  }

  isDraw() {
      return this.getWinner() == null && this.noMoreTurns();
  }

  getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
  }
  changePlayer() {
      this.currentPlayer = this.getCurrentPlayerSymbol() === 'x' ? 'o' : 'x';
  }
  addScore(row, col, point) {
      this.gridScore[row][0] += point;
      this.gridScore[3 + col][0] += point;
      if (row == col) {
          this.gridScore[2 * 3][0] += point;
      }
      if (3 - 1 - col == row) {
          this.gridScore[2 * 3 + 1][0] += point;
      }
  }

  static createMatrix(rows, cols, initialValue) {
      let rowArr = [];
      for (let i = 0; i < rows; i++) {
          let colArr = [];
          for (let j = 0; j < cols; j++) {
              colArr[j] = initialValue;
          }
          rowArr[i] = colArr;
      }
      return rowArr;
  }
}

module.exports = TicTacToe;
