import React from 'react'; 
import Alert from './Alert';

class SendDialogue extends React.Component {

	//sent = false;	   

	constructor(props) {
	    super(props);

		this.state = {
	      address: '',
	      amount: 0,
	      sent: ''
	    };		 
	}

	handleSubmit = (ev) => {
		ev.preventDefault();

		let address = this.state.address;
		let amount = this.state.amount;

		 fetch('http://localhost:8080/send?address=' + address + '&amount=' + amount)
		    .then((res) => res.text())
		    .then((data) => {
		      console.log('fetch : ' + data);	
		      this.setState({sent: data});
		 })
	}


	handleAddressChange = (ev) => {
	    this.setState({address: ev.target.value});
	}

	handleAmountChange = (ev) => {
	    this.setState({amount: ev.target.value});
	}

	render() {
		if (this.state.sent === '') {
			return( 
				<div className="formcontainer">
					<h1>Send Brios</h1>
					<form action="" onSubmit={this.handleSubmit}>
					    <input id="address" type="text" 
					    	placeholder="Enter Harmonian address" name="address"
					    	value={this.state.address} 
					    	onChange={this.handleAddressChange} 
					    	/>
					    <br/>
					    <span>Enter amount :</span>
					    <input id="amount" type="number" 
					        name="amount"
					    	value={this.state.amount} 
					    	onChange={this.handleAmountChange} 
					    	/>	
					    <input id="submit" type="submit" value="Send" />
				    </form>
				</div>
			);	
		} else {
			return (
				<Alert explain={"Sent " + this.state.amount + " BRIO to address " + this.state.address +
				" with transaction id "} txt= {this.state.sent} />
			);
		}
	}	
}
export default SendDialogue;
