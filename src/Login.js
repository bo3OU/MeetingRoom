import React, { Component } from 'react';
// import toaster and google OAuth 2.0
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';


import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

export default class  Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
      return ( 
        <div>
            <GoogleLogin
                clientId="648876707065-l8igoqtnrg46lhkmqsiq9f3ofuugiqj1.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />,
       </div>
       )
    }
}