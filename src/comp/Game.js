import React from 'react';
import Board from './Board';

class Game extends React.Component{
	state = {
		ox: ['', '', '', '', '', '', '', '', ''],
		mark: ['O', 'X'],
		turn: 0
	}

	next = () => {
		const temp = (this.state.turn + 1);
		this.setState( () => ({turn:temp}) )
	}

	occupy = (num) => {
		if (!this.state.ox[num]){
			let temp = this.state.ox;
			temp[num] = this.state.mark[(this.state.turn) % 2];
			this.setState((state) => ({ox:temp}));
			this.next();
		}
	}

	compare = (a,b,c) => {
		const field = this.state.ox;
		if(field[a]===field[b] && field[b]===field[c]){
			return true;
		}
		else{
			return false;
		}
	}
	
	check = () => {
		const field = this.state.ox;
		if((this.compare(0,1,2) || this.compare(0,4,8) || this.compare(0,3,6)) && (field[0] === 'O' || field[0] === 'X')){
			return field[0];
		}
		else if((this.compare(4,3,5) || this.compare(4,1,7) || this.compare(4,2,6)) && (field[4] === 'O' || field[4] === 'X')){
			return field[4];
		}
		else if((this.compare(8,2,5) || this.compare(8,6,7)) && (field[8] === 'O' || field[8] === 'X')){
			return field[8];
		}
		
		return false;
	}
			
	render(){
		const done = this.check();
		if(!done && this.state.turn < 9){
			return <Board state={this.state} occupy={this.occupy}/>;
		}
		else if(done){
			return <h1> {done} WINS!! </h1>
		} 
		else{
			return <h1> DRAW!! </h1>
		}
	}
}

export default Game;