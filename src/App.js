
/*
React App
*/
"use strict"
import React from 'react';  
import ReactDOM from 'react-dom';

//console.log('Hello from App.js');

const App = () => (
	<Layout/>
)

//LAYOUT ELEMENTS

const Header = () => (
  <header>
  <h1>Hello Harmony!</h1>
  </header>
)

const Left = () => (
  <div className="left">
      <div id="buttons">
        <ul className="menu">
          <li><a href="">Info</a></li><br/>
        </ul>
      </div>            
  </div>
)  

const Middle = () => ( 
  <div className="middle">

  </div>
)

const Right = () => (
   <div className="right"></div>
)

const Layout = () => (
  <div id="container">
    <Header/>
    <main>
      <Left/>
      <Middle/>
      <Right/>
    </main>
  </div>
)

const destination = document.getElementById("app");

ReactDOM.render( <App />, destination );