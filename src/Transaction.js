import React from 'react'; 

//popup code https://codepen.io/bastianalbers/pen/PWBYvz

const Popup = (props) => {
	 return(
      <div className='popup' >
        <div className='popup_inner'>
          <h1>{props.text}</h1>
        </div>
      </div>
    );
};

class Transaction extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      showPopup: false
	    };
	    var iconCategory = null;
	    //var iconAsset = null;

	    this.setIcon(this.props.data.category);
  	}

  	togglePopup = () => {
  		this.setState({
	      showPopup: !this.state.showPopup
	    });
  	}

  	handleClick = () => {
  		this.togglePopup();
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

		let popup = this.state.showPopup ? 
			 <Popup text="Close Me"/> : "";


		//let popup = this.state.showPopup ? "POPUP" : "";

		return(
			<li>
			<div onClick={this.handleClick}>
				<span className = "tx-icon-left">{this.iconCategory}</span>
					<div className = "tx-content">
						<h2 className = "tx-main">{this.props.data.amount}</h2>
						<h3 className = "tx-sub">{time}</h3>
					</div>
			</div>		
			{popup}
			</li>

		);		
	}

}
export default Transaction;

// <button onClick={this.togglePopup.bind(this)}>show popup</button>