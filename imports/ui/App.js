import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './headerComponent/header.js'

class Todo extends Component {
  render() {
    return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
    );
  }
}

export default Todo;