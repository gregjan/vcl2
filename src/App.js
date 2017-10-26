import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css'; //import css files here

//import logo from './logo.svg' here;

//Components (import js files of all the components)
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homePage'
import HelpPage from './components/pages/helpPage'

class App extends Component {
  render() {
    return (
	<Router>
	<div className="App">
      <Header />
		<Route exact path='/help' component={HelpPage} />
		<Route exact path='/about' component={HomePage} />
	  <Footer />
	</div>
	</Router>
    );
  }
}

export default App;
