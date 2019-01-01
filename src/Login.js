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
            href :  `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${obj.obj.client_id}&redirect_uri=${obj.obj.redirect_uris[0]}&scope=https://www.googleapis.com/auth/calendar+https://www.googleapis.com/auth/calendar.events+https://www.googleapis.com/auth/calendar.events.readonly+https://www.googleapis.com/auth/calendar.readonly+https://www.googleapis.com/auth/calendar.settings.readonly&access_type=offline&approvalPrompt=force`
        }
        console.log(this.state.href)

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
