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

    // Iterate over the array of possible moves and create new moves
    knightMoves.forEach((move) => {
      const dx = move[0];
      const dy = move[1];

      const newX = x + dx;
      const newY = y + dy;

      // If the moves do not go beyond the board, then we add to the result
      if (newX >= 0 && newX < this.board && newY >= 0 && newY < this.board) {
        validPositions.push([newX, newY]);
      }
    });
    return validPositions;
  }

  knightMoves(start, end) {
    // Create a queue and a collection of visited positions
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
      // Take the positions from queue
      const positions = queue.shift();
      const position = positions[positions.length - 1];
      let positionKey = position.join(",");

      // If position is finish position, return path
      if (positionKey === end.join(",")) {
        console.log(positions);
        return positions;
      }

      const moves = this.getPossibleMoves(position);

      // We take the next possible move and add it to the queue along with the previous moves
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
