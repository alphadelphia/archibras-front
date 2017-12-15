
/*
React App
*/
"use strict"
import React from 'react';  
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

/*
[{
        "account" : "",
        "address" : "mkx3xd4mACBap88fWhpBvm6ypd8YkJjC3n",
        "category" : "immature",
        "amount" : 9744.78000000,
        "confirmations" : 4,
        "generated" : true,
        "blockhash" : "00007e684980aa9ea23a615b63c2cb9ff2a2f7d3be6b56e8429f60b75336ba7b",
        "blockindex" : 0,
        "blocktime" : 1513345871,
        "txid" : "51cf44cb803cf46335013f6b7652f427e1c56f002c488ab3d64d151e95bb7d43",
        "time" : 1513345863,
        "timereceived" : 1513345863}, 
        {
        "account" : "",
        "address" : "n1gmdLS1Dazdd4mQVitgwfTTntqDaAtQ4Q",
        "category" : "immature",        "confirmations" : 1,

        "amount" : 9741.38000000,
        "confirmations" : 3,
        "generated" : true,
        "blockhash" : "0000a985e0f99bd919217fc7cf363777efd1051a8fc8426b6dface9251b8307a",
        "blockindex" : 0,
        "blocktime" :{
   
        "txid" : "45b75138f52d23c1650b35c08a26eeb4fe8c68638c617b9df8a919c7ef1cea29",
        "time" : 1513345863,
        "timereceived" : 1513345863
    },{
        "account" : "",
        "address" : "mzgTYEoQF7ZPnvkM53b6zyUHEGCEUxpcaK",
        "category" : "immature",
        "amount" : 9737.99000000,
        "confirmations" : 2,
        "generated" : true,
        "blockhash" : "0000e3df5f3c8da0f2bd54f0051ff9685024aaf7afbfab5e240070e277812f96",
        "blockindex" : 0,
        "blocktime" : 1513345871,
        "txid" : "e66ee959ba86678670a950a397602dab804fcd5056d0ee6c4e5fd170ba41bd22",
        "time" : 1513345863,
        "timereceived" : 1513345863
    },{
        "account" : "",
        "address" : "n4EN1d3muBwz8wnHknDqcTyEMjy4sZmLFz",
        "category" : "immature",
        "amount" : 9734.61000000,
        "confirmations" : 1,
        "generated" : true,
        "blockhash" : "00006ed22e492475b6a022c184730a7fc83a26d551ab00e2851cd3e42f148d9d",
        "blockindex" : 0,
        "blocktime" : 1513345871,
        "txid" : "c989e62d61f3443d6538a2b010fb253a69893e508e04e18cead188c914470b86",
        "time" : 1513345863,
        "timereceived" : 1513345863
    },
    {
        "account" : "",
        "address" : "mvFFFH3hA8rBHPoACrVo39bkGom5XQC3Rr",
        "category" : "send",
        "amount" : -10000.00000000,
        "fee" : -0.01000000,
        "confirmations" : 0,
        "txid" : "d0d0939d69daa2b512f53f77b38cd5b1a19e57329750993afef1917d56be8887",
        "time" : 1513346424,
        "timereceived" : 1513346424
    }

]";

var gettransaction_gen = {
    "amount" : 0.00000000,
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
    "amount" : -10000.00000000,
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

var listtransaction_rec = {
    account" : "",
        "address" : "mvFFFH3hA8rBHPoACrVo39bkGom5XQC3Rr",
        "category" : "receive",
        "amount" : 10000.00000000,
        "confirmations" : 0,
        "txid" : "d0d0939d69daa2b512f53f77b38cd5b1a19e57329750993afef1917d56be8887",
        "time" : 1513346424,
        "timereceived" : 1513346424
    
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