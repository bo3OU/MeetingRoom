import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Homepage from './Homepage';
import Login from './Login';
import Calendar from './Calendar';
import Form from './Form';
import Roomlist from './Roomlist';
import {refreshToken} from './Helpers'



class App extends Component {
  componentDidMount() {
    setInterval( () => {
      try{
        console.log('refreshing token now !')
        refreshToken()
      } catch(error) {
        console.log(error)
      }
    },10*60*1000)
  }

  render() {
    return (
      <Router>
      <div>  
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
          <Route path="/roomlist" component={Roomlist} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/login" component={Login} />
          <Route path="/form" component={Form} />
          <Route path="*" component={Homepage} />
        </Switch>
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
    );
  }
}

export default App;
