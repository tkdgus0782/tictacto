import React from 'react';
import './Square.css';

class Square extends React.Component{
	
	occupy = (num) => (this.props.occupy(num))
	
	render(){
		const value = this.props.state.ox;
		return (<div>
			<table className="ttt">
				<thead></thead>
				<tbody>
					<tr> 
						<td onClick={() => {(this.occupy(0))}}>{value[0]}</td> 
						<td onClick={() => {(this.occupy(1))}}>{value[1]}</td>  
						<td onClick={() => {(this.occupy(2))}}>{value[2]}</td> 
					</tr>
					<tr> 
						<td onClick={() => {(this.occupy(3))}}>{value[3]}</td> 
						<td onClick={() => {(this.occupy(4))}}>{value[4]}</td>  
						<td onClick={() => {(this.occupy(5))}}>{value[5]}</td>
					</tr>
					<tr> 
						<td onClick={() => {(this.occupy(6))}}>{value[6]}</td> 
						<td onClick={() => {(this.occupy(7))}}>{value[7]}</td>  
						<td onClick={() => {(this.occupy(8))}}>{value[8]}</td>
					</tr>
				</tbody>
				
				<tfoot></tfoot>
				</table>
		</div>);
	}
}

export default Square;