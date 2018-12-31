import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';
import obj from './credentials'

export default class  Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            href :  "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" + obj.obj.client_id + "&redirect_uri=http%3A%2F%2Fmeetingrooms.tk%3A3000%2Froomlist&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.settings.readonly&access_type=offline&approvalPrompt=force"
        }
        console.log(obj.obj.client_id)

    }

    render() {
        return (
        
            <div className="wrapper-center" style={{
                'position': 'absolute',
                'left': '40%',
                'top': '40%'
            }}> 

            <a href={this.state.href}
            title="Google+" className="btn btn-googleplus btn-lg">
                <i className="fa fa-google-plus fa-fw"></i> Sign-in</a>
            </div>
        )
    }
}
