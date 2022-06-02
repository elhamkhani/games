import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to="/">Home</Link>
				</div>
				<div>
					<Link to="/TicTacToe">Tic Tac Toe</Link>
				</div>
			</div>
		);
	}
}
export default Navigation;
