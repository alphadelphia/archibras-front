
/*
React App
*/
"use strict"
import React from 'react';  
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

//console.log('Hello from App.js');
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'test');
xhr.onload = function() {
    if (xhr.status === 200) {
        alert('test : ' + xhr.responseText);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
*/

class App extends React.Component {

	componentWillMount() {
	}

	render () {
		return (
		<Router>
			<div id="container">
			    <Header/>
			    <main>
			      <UIButtonCol/>
			      <div className="middle">
			      	<UIDisplayPanel/>
			      	<UIWalletPanel/>
			      </div>  
			      <UiInfoCol />
			    </main>
		  </div>
	  	</Router>
		);
	}
}
export default withRouter(App);

const Header = () => (
  <header>
  	<h1>Harmonian</h1>
  </header>
)

const UIButtonCol = (props) => (
  <div className="left">
      <div id="buttons">
        <ul className="menu">
          <li><Link to="/">Wallet transactions</Link></li><br/>
          <li><Link to="/send">Send sous</Link></li><br/>
          <li><Link to="/receive">Receive sous</Link></li><br/>
        </ul>
      </div>            
  </div>
)  

const UIDisplayPanel = (props) => ( 
  <div className="middle-upper">
  		Display UI
  </div>
)

const UIWalletPanel = (props) => ( 
  <div className="middle-lower">
  	<Switch>
      <Route exact path='/' component={TransactionsUi}/>
      <Route path='/receive' component={ReceiveUi}/>
      <Route path='/send' component={SendUi}/>
      <Route path='/transactions' component={TransactionsUi}/>
    </Switch>
  </div>
)

const TransactionsUi = (props) => (
	"TransactionsUi"
)

const SendUi = (props) => (
	"SendUi"
)

const ReceiveUi = (props) => (
	"ReceiveUi"
)

const UiInfoCol = (props) => (
   <div className="right"></div>
)

const destination = document.getElementById("app");

ReactDOM.render( <App />, destination );