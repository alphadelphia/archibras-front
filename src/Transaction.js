import React from 'react'; 

class Transaction extends React.Component {

	constructor(props) {
	    super(props);

	    var iconCategory = null;
	    //var iconAsset = null;

	    this.setIcon(this.props.data.category);
  	}

	setIcon = (category) => {
		switch(category) {
			case "immature" :
				
			case "generate" :
				
			case "stake" :
				this.iconCategory = "K";
				break;		
			case "orphan" :
				this.iconCategory = "W";
				break;		
			case "send" :
				this.iconCategory = "h";
				break;			
			case "receive" :
				this.iconCategory = "j";
				break;	
			default:
				break;				
		}
		
	}

	render() {
		let date = new Date(this.props.data.time * 1000);
		let time = date.toString();
		
		return(
			<li>
			<div>
				<span className = "tx-icon-left">{this.iconCategory}</span>
					<div className = "tx-content">
						<h2 className = "tx-main">{this.props.data.amount}</h2>
						<h3 className = "tx-sub">{time}</h3>
					</div>
			</div>		
			</li>

		);		
	}

}
export default Transaction;