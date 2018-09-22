import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';
import queryString from 'query-string';
import axios from 'axios';
import qs from 'qs';

// will get the authorization from google 
function getOAuth() {
    
    // return the authorization key 
}

// will get the token using the authorization key
function getToken(auth_key) {

    const data = { 
        'code': auth_key,
        'client_id' : '648876707065-l8igoqtnrg46lhkmqsiq9f3ofuugiqj1.apps.googleusercontent.com',
        'grant_type' : 'authorization_code',
        'client_secret' : 'RYX_egjx0B0NtexbeTorq-IN',
        'redirect_uri' : 'https://modest-ramanujan-7fb91d.netlify.com/homepage',
        'withCredentials': 'true', 
        'crossdomain' : 'true',
    };
    axios.post('https://accounts.google.com/o/oauth2/token', qs.stringify(data))  
    .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log('something bad happened')   
        console.log(error);
      })
      .then(function () {
        // always executed
      });

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
        const parsed = queryString.parse(this.props.location.search);
        localStorage.setItem('code', parsed.code);
        getToken(parsed.code)


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