import React, { Component } from 'react';
import Board from './Board';
import './TicTacToe.css';

class TicTacToe extends Component {
	render() {
		return (
			<div>
				TicTacToe
				<Board></Board>
			</div>
		);
	}
}

export default TicTacToe;
