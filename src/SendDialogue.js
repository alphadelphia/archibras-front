import React from 'react'; 

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
		console.log(this.state);
		if (this.state.sent === '') {
			return( 
				<div id="formcontainer">
					<form className = "sendform" action="" onSubmit={this.handleSubmit}>
					    <input className="address" id="address" type="text" 
					    	placeholder="Enter Harmonian address" name="address"
					    	value={this.state.address} 
					    	onChange={this.handleAddressChange} 
					    	/>
					    <br/>
					    <input className="amount" id="amount" type="number" 
					    	placeholder="Enter amount of sous" name="amount"
					    	value={this.state.amount} 
					    	onChange={this.handleAmountChange} 
					    	/>	
					    <input className="submit" id="submit" type="submit" value="Send" />
				    </form>
				</div>
			);	
		} else {
			return (
				<div id="sentresponse">{this.state.sent}</div>
			);
		}
	}	
}
export default SendDialogue;
