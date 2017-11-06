import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Sidebar from 'react-sidebar';

import './App.css'; //import css files here

//import logo from './logo.svg' here;

//Components (import js files of all the components)
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
//import BodySideBar from './components/bodyComponent/body'
import HomePage from './components/pages/homePage'
import HelpPage from './components/pages/helpPage'
import AboutPage from './components/pages/aboutPage'
import RequestFormPage from './components/pages/requestFormPage'
import AdminPage from './components/pages/adminPage'

class App extends Component {
  render() {
    return (
	<Router>
	<div className="App">
      <Header />
		<Route exact path='/'  component={HomePage} />
		<Route exact path='/help' component={HelpPage} />
		<Route exact path='/about' component={AboutPage} />
		<Route exact path='/requestForm' component={RequestFormPage} />
		<Route exact path='/admin' component={AdminPage} />
	</div>
	</Router>
    );
  }
}

export default App;
