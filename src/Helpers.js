import axios from 'axios';
import qs from 'qs';
import obj from './credentials';

export function refreshToken() {
    var url = 'https://www.googleapis.com/oauth2/v4/token'
    const data = { 
        'refresh_token': localStorage.getItem('refresh'),
        'client_id' : obj.obj.client_id,
        'grant_type' : 'refresh_token',
        'client_secret' : obj.obj.client_secret,
    };
    console.log('requesting new token !')
    axios.post(url,qs.stringify(data)).then(function (response){
        localStorage.setItem('token',response.data.access_token)
        return response.data.access_token;
    })
}