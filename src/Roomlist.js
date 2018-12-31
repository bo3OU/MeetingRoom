import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';
import axios from 'axios';
import qs from 'qs';
import queryString from 'query-string';
import obj from './credentials'

export default class  Roomlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendars : [],
            selectedID :''
        }
        //bindings
        this.getCalendars = this.getCalendars.bind(this);
        this.getToken = this.getToken.bind(this);

        const parsed = queryString.parse(this.props.location.search);
        localStorage.setItem('code', parsed.code);
        this.getToken(parsed.code);
        
    }

    getCalendars(token) {
        console.log('executing get calendars')

        .catch(function (error) {
        // handle error
            console.log('something bad happened')   
            console.log(error);
        }) 
    }

    getToken(auth_key) {
        const data = { 
            'code': auth_key,
            'client_id' : obj.obj.client_id,
            'grant_type' : 'authorization_code',
            'client_secret' : obj.obj.client_secret,
            'redirect_uri' : 'meetingrooms.tk:3000/roomlist',
        };
        var self = this;
        axios.post('/o/oauth2/token', qs.stringify(data))  
        .then(function (response) {
            // handle success
            console.log(response.data.access_token)
            localStorage.setItem('token',response.data.access_token)
            console.log(response.data.hasOwnProperty('refresh_token'))
            console.log(response.data)
            if ( response.data.hasOwnProperty('refresh_token')) {
                console.log('token exists')
                localStorage.setItem('refresh',response.data.refresh_token)
            }
            // getCalendars()
            // bring from localstorage
            axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList?oauth_signature_method=HMAC-SHA1&oauth_timestamp=1537581206&oauth_nonce=B1n4Zb&oauth_version=1.0&oauth_signature=B+oorx+CN4QuckPbWY+BppkV7IY=', 
            {
                headers: {
                    'Authorization': 'Bearer '+ response.data.access_token,
                },
            })  
           .then(function (response) {
               console.log('something good happened?')
               console.log(response)
               console.log(response.data.items[0].summary)
               self.setState({
                   calendars : response.data.items
               })

             })
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

    setRoom() {
        localStorage.setItem('RoomID',this.state.calendars[this.state.selectedID].id)
        localStorage.setItem('RoomName',this.state.calendars[this.state.selectedID].summary)
        this.props.history.push('/homepage')
    }

    render() {
        return (

            // <div className="wrapper"   style={{
            //       'position': 'absolute',
            //       'left': '40%',
            //       'top': '40%'
            //   }}>
            <div className="container">
                <div className="row">
                    <div className="container">
                    <div className="col-xs-6" style={{'paddingTop' : '40%'}}></div>
                        <div className="col-xs-3" >
                            <select
                                className="custom-select"
                                style={{'textAlignLast':'center'}}
                                value={this.state.selectedID}
                                onChange={(e) => this.setState({selectedID: e.target.value})}
                            >
                            <option value="-1" defaultValue>heures</option>
                            {Object.keys(this.state.calendars).map((item, i) => (
                                    <option value={i} key={i}>{this.state.calendars[item].summary}</option>
                            ))}
                            </select>
                        <center style={{'marginTop':'30px'}}>
                            <button type="button" className="btn btn-primary" onClick={(e) => {this.setRoom()}}>choose room</button>
                            </center>   
                        </div>
                    </div>
                </div>
        </div>
        //    </div>
        )
    }
}