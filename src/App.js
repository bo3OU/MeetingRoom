import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import Login from './Login'

class App extends Component {
  render() {
    return (
      <Router>
      <div>  
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
