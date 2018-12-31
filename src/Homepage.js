import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';
import axios from 'axios';
import qs from 'qs';
import {refreshToken} from './Helpers'

export default class  Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            RoomTitle : localStorage.getItem('RoomName'),
            CurrentDate : 'current date',
            TimerStatement : 'time till next meeting',
            TimerValue : '00:00:00',
            TimeTillNextMeeting : 0,
            RoomStatus : -1,
            color1: '43b581',
            color2: 'e9e9e9',
            startevent:0,
            endevent:0,
            now:0,
        };
        this.getEvents()
        this.validate = this.validate.bind(this)
    }

    getEvents(){
        var self = this;
        var url = `https://www.googleapis.com/calendar/v3/calendars/${localStorage.getItem('RoomID')}/events?timeMin=${new Date().toISOString()}&timeMax=${new Date().toISOString().substring(0,11)}23:59:59Z&orderBy=startTime&singleEvents=true`;
        console.log('getting events with url :' + url)
        axios.get(url,
        {
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            }
        }).then(function(response) {
            if(response.status == 401) {
                console.log('well ?')
                
            }
            if(response.data.items.length == 0) {
                self.setState({
                    startevent: null,
                    endevent : null,
                    RoomStatus : 0,
                    TimerValue:'----',
                    TimerStatement:'Aucune reunion aujourd\'hui',
                    color1: '43b581',
                    color2: 'e9e9e9' 
                })
            }
            else {
                var Start = response.data.items[0].start.dateTime;
                Start = new Date(Start).getTime()
                var End = response.data.items[0].end.dateTime;
                End = new Date(End).getTime()
                localStorage.setItem('eventid',response.data.items[0].id)
                self.setState({startevent:Start,endevent:End})
            }
        }).catch((error) => {
            console.log('401 status here')
            refreshToken().then((token)=> {
                console.log(token)    
                this.getEvents()
            });
        })
}

    componentDidMount() {
        let self = this;
        setInterval( () => {
        this.setState({
            CurrentDate : new Date().toLocaleString(),
            now : new Date().getTime()
        },() => {
            var Start = this.state.startevent;
            var now = this.state.now;
            var End = this.state.endevent; 
            if (Start > now + 600000) {
                console.log('way before')
                self.setState({
                    TimerValue:  this.formatTimestamp(Start - now) ,
                    RoomStatus:  0,
                    TimerStatement: 'Prochaine reunion dans :',
                    color1: '43b581',
                    color2: 'e9e9e9', 
                })
            } else if( now < Start ) {
                console.log('about to start ')
                self.setState({
                    TimerValue:  this.formatTimestamp(Start - now),
                    RoomStatus: 1,
                    TimerStatement: 'temps restant pour la reunion :',
                    color1: 'faa61a',
                    color2: 'e9e9e9', 
                })
            } else if (End > now + 2*60*1000){
                console.log('waiting phase')
                if(localStorage.getItem('eventid') != localStorage.getItem('lastValideEvent')) {
                    console.log('event not valid, deleting')
                    var url = 'https://www.googleapis.com/calendar/v3/calendars/' + localStorage.getItem('RoomID')+ '/events/' + localStorage.getItem('eventid')
                    axios.delete(url,   
                        { 
                            headers: {
                            'Authorization': 'Bearer '+ localStorage.getItem('token'),
                        }
                    }).then(function(response) {
                        self.getEvents()
                        localStorage.setItem('validate',0)
                    })
                } else { 
                    console.log('event valid,proceeding')
                    // if (localStorage.getItem('validate')==0) {
    
                    self.setState({
                        TimerValue:  this.formatTimestamp(End - now),
                        RoomStatus: 3,
                        TimerStatement: 'temps restant pour la fin de la reunion :',
                        color1: 'f04747',
                        color2: 'e9e9e9', 
                    })
                }

            } else if (End > now) {
                console.log('about to finish')
                self.setState({
                    TimerValue: this.formatTimestamp(End - now),
                    RoomStatus: 4,
                    TimerStatement: 'temps restant pour la fin de la reunion :',
                    color1: 'f04747',
                    color2: 'e9e9e9', 
                })
                if(End < now + 1000){
                    self.getEvents();
                }
            }
        })
        },1000)
        setInterval( () => {
            self.getEvents();
        },20*1000)
    }

    formatTimestamp(timestamp) {
        var date = new Date(timestamp);
        var hours = "0" + date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        return hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }
    validate() {
        localStorage.setItem('lastValideEvent',localStorage.getItem('eventid'))
        this.setState({
            RoomStatus : 2
        })
    }
    render() {
        return ( 
        <div>
            <section id="home">
                <div className="overlay" style={{'background': 'linear-gradient(to top right, #'+ this.state.color1 +', #' + this.state.color2 + ')'}}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="home-info">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={require('./Assets/images/logo.png')} alt="Italian Trulli" style={{width:'150px',height:'50px'}}>
                                            </img>
                                        </div>
                                        <div className="col-md-8">
                                            <h1 style={{'fontSize':'2.5em','marginBottom': '0px'}}>{ this.state.RoomTitle }</h1>
                                        </div>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-default btn-circle btn-xl" onClick={() => {this.props.history.push('/form')}}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-default btn-circle btn-xl" onClick={() => {this.props.history.push('/calendar')}}>
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
                                        <div className="col-md-3">
                                        </div>
                                        <div className="col-md-6">
                                            <button type="button" className="buttons successes" style={{
                                                'visibility':this.state.RoomStatus == 1 ? 'visible' : 'hidden'
                                            }}
                                                onClick={() => this.validate()}
                                            >Confirmer presence de reunion</button>
                                        </div>
                                        <div className="col-md-3">
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

