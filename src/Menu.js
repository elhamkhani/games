import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/TicTacToe">Tic Tac Toe</NavLink>
				<NavLink to="/MemoryGame">Memory Game</NavLink>
			</div>
		);
	}
}
export default Menu;
