import './App.css';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Games:</p>
				<Link className="App-link" to="/TicTacToe">
					TicTacToe
				</Link>
			</header>
		</div>
	);
}

export default App;
