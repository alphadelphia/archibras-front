
/*
React App
*/
"use strict"
import React from 'react';  
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

import TransactionList from './TransactionList';
import SendDialogue from './SendDialogue';
import ReceiveDialogue from './ReceiveDialogue';
      

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
    let version = this.state.info.version ? 
      " Running Harmonian Client " + this.state.info.version : "";
		return (
  		<Router>
  			<div id="container">
  			    <Header />
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

  			        <UIMessagePanel message={this.state.message} version = {version}/>
              </div>
  			    </main>
  		  </div>
  	  </Router>
		);
	}
}
export default withRouter(App);

const Header = (props) => (
  <header>
  	<span className="heading"> Harmonian </span> 
  </header>
)

const UIInfoPanel = (props) => (
   <div id="info">
   <h3>Wallet info</h3>
   {typeof props.info !== "undefined" &&
    <p>   
      Balance: {props.info.balance} BRIO <br/>
      Stake: {props.info.stake} BRIO <br/>
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
      <li><Link to="/send">Send Brios</Link></li><br/>
      <li><Link to="/receive">Receive Brios</Link></li><br/>
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
      <Route path='/receive' component={ReceiveDialogue}/>
      <Route path='/send' component={SendDialogue}/>
    </Switch>
  </div>
)

const UIMessagePanel = (props) => (
    <div id="message">
        <h3>
          Messages
        </h3>
        <p>
        {typeof props.message !== "undefined" ? props.message.msg : '' }
        </p>
        <p>
         {props.version}
        </p>
    </div>
)

const destination = document.getElementById("app");

ReactDOM.render( <App />, destination );