export const humanMove = (i, cells, characterPlayer) => {
	if (cells[i] == null) {
		console.log(`Human player index: ${i}`);
		cells[i] = cells[i] || characterPlayer;
	}
};

export const computerMoves = (cells, characterPlayer) => {
	const randomCell = Math.floor(Math.random() * (cells.length - 1));
	if (cells[randomCell] == null) {
		console.log(`Computer random index: ${randomCell}`);
		cells[randomCell] = characterPlayer == "X" ? "O" : "X";
	}
	else {
		for (let index = 0; index < cells.length; index++) {
			if (cells[index] == null) {
				console.log(`Computer calculated index: ${index}`);
				cells[index] = characterPlayer == "X" ? "O" : "X";
				break;
			}
		}
	}
};

export const checkWinningConditions = (cells) => {
	let res = false;
	const combinations = [
		[0, 1, 2],
		[0, 2, 1],
		[1, 0, 2],
		[1, 2, 0],
		[2, 0, 1],
		[2, 1, 0],

		[3, 4, 5],
		[3, 5, 4],
		[4, 3, 5],
		[4, 5, 3],
		[5, 3, 4],
		[5, 4, 3],

		[6, 7, 8],
		[6, 8, 7],
		[7, 6, 8],
		[7, 8, 6],
		[8, 6, 7],
		[8, 7, 6],

		[0, 3, 6],
		[0, 6, 3],
		[3, 0, 6],
		[3, 6, 0],
		[6, 0, 3],
		[6, 3, 0],

		[1, 4, 7],
		[1, 7, 4],
		[4, 1, 7],
		[4, 7, 1],
		[7, 4, 1],
		[7, 1, 4],

		[2, 5, 8],
		[2, 8, 5],
		[5, 2, 8],
		[5, 8, 2],
		[8, 2, 5],
		[8, 5, 2],

		[0, 4, 8],
		[0, 8, 4],
		[4, 0, 8],
		[4, 8, 0],
		[8, 0, 4],
		[8, 4, 0],

		[2, 4, 6],
		[2, 6, 4],
		[4, 2, 6],
		[4, 6, 2],
		[6, 2, 4],
		[6, 4, 2]
	]
	for (let index = 0; index < combinations.length; index++){
		let [x, y, z] = combinations[index];
		if (cells[x] && cells[x] === cells[y] && cells[x] === cells[z]) {
			res = !res;
			break;
		}
	};
	return res;
};

