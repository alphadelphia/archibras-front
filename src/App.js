
/*
React App
*/
"use strict"
import React from 'react';  
import ReactDOM from 'react-dom';

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
		);
	}
}

const Header = () => (
  <header>
  <h1>Harmonian</h1>
  </header>
)

const UIButtonCol = (props) => (
  <div className="left">
      <div id="buttons">
        <ul className="menu">
          <li><a href="">Info</a></li><br/>
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
  		Wallet UI
  </div>
)

const UiInfoCol = (props) => (
   <div className="right"></div>
)

const destination = document.getElementById("app");

ReactDOM.render( <App />, destination );