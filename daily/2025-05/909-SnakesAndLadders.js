/**
 * @param {number[][]} board
 * @return {number}
 */
const snakesAndLadders = function(board) {
	const size = board.length;
	let distances = Array(size).fill(Array(size).fill(0));
	let boardId = 1;
	for (let row = size - 1; row >= 0; row--) {
		let currentMinMove = 0;
      
		for (let col = 0; col < size; col++) {
			const currentSquare = row % 2 === 0
				? board[row][col]
				: board[row][size - 1 - col];
		}
	}

    //
  for (let i = 0; i < ; i++) {
    
  }
};