import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';
import queryString from './query-string/index';
import axios from 'axios';
import qs from 'qs';

export default class  Homepage extends Component {
    constructor(props) {
        super(props);
        // we should store the calendar ID, refresh token, token, clientID and other oauth2.0 stuff
        this.state = 
        {
            RoomTitle : localStorage.getItem('RoomName'),
            CurrentDate : 'current date',
            TimerStatement : 'time till next meeting',
            TimerValue : '11 ; 55:22',
            RoomStatus : 0,  
        };
    }

    componentDidMount() {
        setInterval( () => {
          this.setState({
            CurrentDate : new Date().toLocaleString()
          })
        },1000)
      }

    render() {
      return ( 
        <div>

            <section id="home">
                <div className="overlay">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="home-info">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="./images/logo.png" alt="Italian Trulli" style={{width:'150px',height:'50px'}}>
                                            </img>
                                        </div>
                                        <div className="col-md-8">
                                            <h1 style={{'fontSize':'2.5em','marginBottom': '0px'}}>{ this.state.RoomTitle }</h1>
                                        </div>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-success btn-circle btn-xl" onClick={() => {this.props.history.push('/form')}}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-success btn-circle btn-xl" onClick={() => {this.props.history.push('/calendar')}}>
                                                <i className="fa fa-calendar"></i>
                                            </button>
                                        </div>
                                    </div>
        
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 style={{'textAlign': 'center','marginTop': '0px'}}>{this.state.CurrentDate}</h3>
                                        </div>
                                    </div>
        
                                    <div style={{ 'padding': '20px','marginTop': '100px' }}>
                                        <div className="row">
                                            <div className="col-md-12"><h3 style={{'textAlign':'center' }}>{this.state.TimerStatement}</h3></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12"><h1 style={{'fontSize':'8em' }}>{this.state.TimerValue}</h1></div>
                                        </div>
                                    </div>
        
        
                                    <div className="row" style={{'marginTop': '100px'}}>
                                        <div className="col-md-4">
                                            <button type="button" className="buttons successes">15 MINS</button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="button" className="buttons successes">30 MINS</button>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="button" className="buttons successes">45 MINS</button>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </div>
       )
    }
}