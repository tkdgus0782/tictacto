import React from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component{
	clicked = this.props.clicked;

	render(){
		return <div className='board'>
			
			
			<h2 className='turn'>turn: {this.props.state.mark[this.props.state.turn % 2]}</h2>
			
			<Square 
				state={this.props.state}
				occupy={this.props.occupy}
				
				
				/>
		</div>;
	}
}

export default Board;