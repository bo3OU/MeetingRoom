import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';

// will get the authorization from google 
function getOAuth() {
    
    // return the authorization key 
}

// will get the token using the authorization key
function getToken(auth_key) {

    // return new key and stores it in memory 
} 

// will keep refreshing the auth token 'every 1 minute'
function refreshToken(refresh_token, token) {

    // return new token 
}

function getCalendars() {

    // returns list of calendars in account 
}

function getDataOfCalendar () {

    //return data of 1 specific calendar
}

function addEvent() {

    // returns wheter the event was added or not
}

function getAllEvents() {

}

export default class  Homepage extends Component {
    constructor(props) {
        super(props);
        // we should store the calendar ID, refresh token, token, clientID and other oauth2.0 stuff
        this.state = 
        {
            RoomTitle : 'room title',
            CurrentDate : 'current date',
            TimerStatement : 'time till next meeting',
            TimerValue : '11 ; 55:22',
            RoomStatus : 0,  
        };
      }
      componentWillMount () {       
          this.setState
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
                                            <h1 style={{'font-size':'2.5em','margin-bottom': '0px'}}>{ this.state.RoomTitle }</h1>
                                        </div>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-success btn-circle btn-xl">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-success btn-circle btn-xl">
                                                <i className="fa fa-calendar"></i>
                                            </button>
                                        </div>
                                    </div>
        
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 style={{'text-align': 'center','margin-top': '0px'}}>{this.state.CurrentDate}</h3>
                                        </div>
                                    </div>
        
                                    <div style={{ 'padding': '20px','margin-top': '100px' }}>
                                        <div className="row">
                                            <div className="col-md-12"><h3 style={{'text-align':'center' }}>{this.state.TimerStatement}</h3></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12"><h1 style={{'font-size':'8em' }}>{this.state.TimerValue}</h1></div>
                                        </div>
                                    </div>
        
        
                                    <div className="row" style={{'margin-top': '100px'}}>
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