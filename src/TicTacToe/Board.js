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
		console.log(squares);
		const winningCombo = [
			[1, [2, 3], [4, 7], [5, 9]],
			[2, [5, 8]],
			[3, [6, 9], [5, 7]],
			[4, [5, 6]],
			[7, [8, 9]]
		];
		for (let i = 0; i < winningCombo.length; i++) {
			let value = squares[winningCombo[i][0] - 1];
			if (value !== null) {
				for (let j = 1; j < winningCombo[i].length; j++) {
					if (
						value === squares[winningCombo[i][j][0] - 1] &&
						value === squares[winningCombo[i][j][1] - 1]
					) {
						this.setState({
							winner: value
						});
					}
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
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext
		});
		this.getWinner(squares);
	}
	renderSquare(i) {
		return (
			<Square
				disabled={this.state.squares[i] != null || this.state.winner != null}
				value={this.state.squares[i]}
				onClick={() => {
					this.handleClick(i);
				}}
			></Square>
		);
	}
	render() {
		const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		const winnerStatus = !!!this.state.winner
			? ''
			: this.state.winner + ' won!';
		return (
			<div>
				<div>
					<div className="status">{status}</div>
					<div>{winnerStatus}</div>
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
