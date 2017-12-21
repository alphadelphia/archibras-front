import React from 'react'; 
import { withRouter } from 'react-router-dom';

class Alert extends React.Component {
	
	constructor(props) {
	    super(props);
  	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.props.history.push("/");
	}

	render() {
		return( 
			<div className="alertcontainer">
				<form action="" onSubmit={this.handleSubmit}>
					<p>
						<span className = "explainTxt">{this.props.explain}</span>
						<br/>
					    <span className = "alertTxt">{this.props.txt}</span><br/>
				    </p>
				    <input className="submit" id="submit" type="submit" value="Close" />
			    </form>
			</div>
		);	
	}
}

export default withRouter(Alert);