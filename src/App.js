
/*
React App
*/
"use strict"
import React from 'react';  
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

const infodata = {
    "version" : "v0.0.0.1-unk-alpha",
    "protocolversion" : 70001,
    "walletversion" : 10500,
    "balance" : 0.00000000,
    "newmint" : 14138.02000000,
    "stake" : 0.00000000,
    "blocks" : 10,
    "moneysupply" : 35331.36000000,
    "timeoffset" : 0,
    "connections" : 0,
    "proxy" : "",
    "ip" : "0.0.0.0",
    "difficulty" : 0.25157969,
    "testnet" : true,
    "keypoololdest" : 1513166542,
    "keypoolsize" : 104,
    "paytxfee" : 0.01000000,
    "errors" : ""
  };

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      message:'', 
      info:''
    };   
  }

	componentDidMount() {
    const url = 'http://localhost:8080/';
   
    fetch(url + 'message')
    .then((res) => res.json())
    .then((data) => {
      this.setState({ message: data});
    })

    fetch(url + 'info')
    .then((res) => res.json())
    .then((data) => {
      this.setState({ info: data});
    })
	}

	render () {
    //console.log(this.state);
		return (
  		<Router>
  			<div id="container">
  			    <Header/>
  			    <main>
  			      <div className="left">
                <UIInfoPanel info={this.state.info} /> 
                <UIButtonPanel />
              </div>
  			      <div className="middle">
  			      	<UIDisplayPanel/>
  			      	<UIWalletPanel/>
  			      </div>  
              <div className="right">

  			        <UIMessagePanel message={this.state.message}/>
              </div>
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

const UIInfoPanel = (props) => (
   <div id="info">
   <h3>Wallet info</h3>
   {typeof props.info !== "undefined" &&
    <p>   
      Balance: {props.info.balance} SOU <br/>
      Stake: {props.info.stake} SOU <br/>
      Blocks: {props.info.blocks } <br/>
      IP: {props.info.ip} <br/>
      Connections: {props.info.connections } <br/>
   
    </p>
   } 
  </div>
)

const UIButtonPanel = () => (
  <div id="buttons">
    <ul className="menu">
      <li><Link to="/">Wallet transactions</Link></li><br/>
      <li><Link to="/send">Send sous</Link></li><br/>
      <li><Link to="/receive">Receive sous</Link></li><br/>
    </ul>
  </div>     
)

const UIDisplayPanel = (props) => ( 
  <div className="middle-upper">
  		<div id="video">
      </div>
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

const UIMessagePanel = (props) => (
    <div id="message">
        <p>
          {typeof props.message !== "undefined" ? props.message.msg : '' }
        </p>
    </div>
)

const destination = document.getElementById("app");

ReactDOM.render( <App />, destination );