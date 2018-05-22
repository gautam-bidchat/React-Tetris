import Tetromino from '../Tetromino.js';

describe('Tetromino Class', () => {
	const tetromino = new Tetromino('SQAURE', 16);
	it('should return correct tetromino type', () => {
		expect(tetromino.tetrominoType).toEqual([[1, 1], [1, 1]]);
	});

	it('should return correct global position', () => {
		expect(tetromino.globalPosition.col).toEqual(7);
	});
});
