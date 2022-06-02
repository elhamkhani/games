import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
			winner: null
		};
	}
	getWinner(squares) {
		const winningCombo = [
			[0, [1, 2], [3, 6], [4, 8]],
			[1, [4, 7]],
			[2, [5, 8], [4, 6]],
			[3, [4, 5]],
			[6, [7, 8]]
		];
		for (let i = 0; i < winningCombo.length; i++) {
			let value = squares[winningCombo[i][0]];
			if (value === null) continue;
			for (let j = 1; j < winningCombo[i].length; j++) {
				if (
					value === squares[winningCombo[i][j][0]] &&
					value === squares[winningCombo[i][j][1]]
				) {
					return value;
				}
			}
		}
	}
	ResetGame() {
		this.setState({
			squares: Array(9).fill(null),
			xIsNext: true,
			winner: null
		});
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		if (this.getWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext
		});
	}
	renderSquare(i) {
		return (
			<Square
				value={this.state.squares[i]}
				onClick={() => {
					this.handleClick(i);
				}}
			></Square>
		);
	}
	render() {
		const winner = this.getWinner(this.state.squares);
		const status = winner
			? winner + ' won!'
			: 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		return (
			<div>
				<div>
					<div className="status">{status}</div>

					<div className="board-row">
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</div>
					<div className="board-row">
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
					</div>
					<div className="board-row">
						{this.renderSquare(6)}
						{this.renderSquare(7)}
						{this.renderSquare(8)}
					</div>
				</div>
				<div>
					<button
						onClick={() => {
							this.ResetGame();
						}}
					>
						Reset Game
					</button>
				</div>
			</div>
		);
	}
}

export default Board;
