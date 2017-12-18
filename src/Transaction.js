import React from 'react'; 

class Transaction extends React.Component {

	constructor(props) {
	    super(props);

	    var iconCategory = null;
	    //var iconAsset = null;
  	}
	componentDidMount() {
		this.setIcons(this.props.category);

	}

	setIcons = (category) => {
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
		return(
			<div>
				<span class="tx-left-icon">{iconCategory}></span>
					<div class="tx-content">
						<h2 class="tx-content-main">{this.props.amount}</h2>
						<h3 class="tx-sub">{new Date(this.props.time)}</h3>
					</div>
				<span class="tx-right-icon">R></span>
			</div>
		);		
	}

}
export default Transaction;