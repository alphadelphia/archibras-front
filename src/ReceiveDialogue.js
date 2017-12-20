import React from 'react'; 
import Alert from './Alert';

class ReceiveDialogue extends React.Component {
  
	constructor() {	   
		super();

		this.state = {
	      newaddress : ''
	    };		 
	}		

	componentDidMount() {
		fetch('http://localhost:8080/newaddress')
		.then((res) => res.text())
		.then((data) => {
		   this.setState({newaddress: data});
		})
	}	

	render() {
		return (
			<Alert explain={"Use this Harmonian address "} txt={this.state.newaddress}/>
		);
	}
}
export default ReceiveDialogue;