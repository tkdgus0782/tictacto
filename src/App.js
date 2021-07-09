import React from 'react';
import Game from './comp/Game';
import './App.css'

class App extends React.Component{
	
	
	render(){
		return <div className='app'>
			<h1 className='logo'>TICTACTOE</h1>
			<Game />
		</div>;
	}
}

export default App;
