import React from 'react'; 

//popup code https://codepen.io/bastianalbers/pen/PWBYvz

const Popup = (props) => {
	 return(
      <div className='popup' >
        <div className='popup_inner'>
          {props.text}
        </div>
      </div>
    );
};

const DataLine = (props) => {
	return(<span>{props.k} : {props.v} <br/></span>);
}

class Transaction extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      showPopup: false,
	      txdata: null
	    };
	    var iconCategory = null;
	    this.setIcon(this.props.data.category);    
  	}
  	
  	componentDidMount() {
  		let txData = Object.entries(this.props.data).map( ([key,val]) => {
	  		return (<DataLine k={key} v={val} key={val}/>)
	  	});
	  	this.setState({
	  		txdata : txData
	  	});
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
			 <Popup text={this.state.txdata} /> : "";

		return(
			<div onClick={this.handleClick}>
				<li>
				<div >
					<span className = "tx-icon-left">{this.iconCategory}</span>
						<div className = "tx-content">
							<h2 className = "tx-main">{this.props.data.amount}</h2>
							<h3 className = "tx-sub">{time}</h3>
						</div>
				</div>		
				</li>
			{popup}
			</div>
		);		
	}

}
export default Transaction;

