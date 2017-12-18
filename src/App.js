
/*
React App
*/
"use strict"
import React from 'react';  
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

import TransactionList from './TransactionList';
/*

var gettransaction_gen = {
    "amount" import TransactionList from './TransactionList';: 0.00000000,
    "confirmations" : 4,
    "generated" : true,
    "blockhash" : "00007e684980aa9ea23a615b63c2cb9ff2a2f7d3be6b56e8429f60b75336ba7b",
    "blockindex" : 0,
    "blocktime" : 1513345871,
    "txid" : "51cf44cb803cf46335013f6b7652f427e1c56f002c488ab3d64d151e95bb7d43",
    "time" : 1513345863,
    "timereceived" : 1513345863,
    "details" : [
        {
            "account" : "",
            "address" : "mkx3xd4mACBap88fWhpBvm6ypd8YkJjC3n",
            "category" : "immature",
            "amount" : 9744.78000000
        }
    ]
};

var gettransaction_send = {
    "amount" : -10000.00000000,export default Transaction;
    "fee" : -0.01000000,
    "confirmations" : 0,
    "txid" : "d0d0939d69daa2b512f53f77b38cd5b1a19e57329750993afef1917d56be8887",
    "time" : 1513346424,
    "timereceived" : 1513346424,
    "details" : [
        {
            "account" : "",
            "address" : "mvFFFH3hA8rBHPoACrVo39bkGom5XQC3Rr",
            "category" : "send",
            "amount" : -10000.00000000,
            "fee" : -0.01000000
        }
    ]
}

var gettransaction_rec = {
        {
    "amount" : 10000.00000000,
    "confirmations" : 0,
    "txid" : "d0d0939d69daa2b512f53f77b38cd5b1a19e57329750993afef1917d56be8887",
    "time" : 1513346424,
    "timereceived" : 1513346424,
    "details" : [
        {
            "account" : "",
            "address" : "mvFFFH3hA8rBHPoACrVo39bkGom5XQC3Rr",
            "category" : "receive",
            "amount" : 10000.00000000
        }
    
}

*/

        


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
      <Route exact path='/' component={TransactionList}/>
      <Route path='/receive' component={ReceiveUi}/>
      <Route path='/send' component={SendUi}/>
      <Route path='/transactions' component={TransactionList}/>
    </Switch>
  </div>
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