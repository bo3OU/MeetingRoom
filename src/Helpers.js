import axios from 'axios';
import qs from 'qs';


export function refreshToken() {
    var url = 'https://www.googleapis.com/oauth2/v4/token'
    const data = { 
        'refresh_token': localStorage.getItem('refresh'),
        'client_id' : '113603925707-l0gumcbmfrisq3vtkgi83g5oc1eiiiqv.apps.googleusercontent.com',
        'grant_type' : 'refresh_token',
        'client_secret' : 'LYnxZzYfMjNxI8B343lD5tx0',
    };
    axios.post(url,qs.stringify(data)).then(function (response){
        localStorage.setItem('token',response.data.access_token)
    }).catch(function(error) {
        console.log(error)
    })
}