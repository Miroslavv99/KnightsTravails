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

    const [x, y] = position;
    const validPositions = [];

    knightMoves.forEach((move) => {
      const dx = move[0];
      const dy = move[1];

      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < this.board && newY >= 0 && newY < this.board) {
        validPositions.push([newX, newY]);
      }
    });
    return validPositions;
  }

  knightMoves(start, end) {
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
      const positions = queue.shift();
      const position = positions[positions.length - 1];
      let positionKey = position.join(",");

      if (positionKey === end.join(",")) {
        console.log(positions);
        return positions;
      }

      const moves = this.getPossibleMoves(position);

      moves.forEach((move) => {
        if (!visited.has(move.join(","))) {
          queue.push([...positions, move]);
          visited.add(move.join(","));
        }
      });
    }
  }
}

const travails = new KnightsTravails();

travails.knightMoves([1, 1], [6, 7]);
