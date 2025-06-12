class KnightsTravails {
  constructor() {
    this.board = 8;
  }

  getPossibleMoves(position) {
    const knightMoves = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];

    let [x, y] = position;
    let validPositions = [];

    knightMoves.forEach((move) => {
      let dx = move[0];
      let dy = move[1];

      let newX = x + dx;
      let newY = y + dy;

      if (newX >= 0 && newX < this.board && newY >= 0 && newY < this.board) {
        validPositions.push([newX, newY]);
      }
    });
    return validPositions;
  }
}
