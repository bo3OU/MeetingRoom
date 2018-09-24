import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './Homepage';
import Login from './Login';
import Calendar from './Calendar';
import Form from './Form';
import Roomlist from './Roomlist';
class App extends Component {
  render() {
    return (
      <Router>
      <div>  
        <Route exact path="/homepage" component={Homepage} />
        <Route path="/roomlist" component={Roomlist} />
        <Route path="/login" component={Login} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/form" component={Form} />

        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
