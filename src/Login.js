import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';

export default class  Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
      return ( 
        <div>
            <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=648876707065-l8igoqtnrg46lhkmqsiq9f3ofuugiqj1.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmodest-ramanujan-7fb91d.netlify.com%2Fhomepage&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.settings.readonly&access_type=offline&approvalPrompt=force">
            {/* <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=113603925707-l0gumcbmfrisq3vtkgi83g5oc1eiiiqv.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhomepage&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.events.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.settings.readonly&access_type=offline&approvalPrompt=force"> */}
            Please Allow access to calendar data.
            </a>
       </div>
       )
    }
}