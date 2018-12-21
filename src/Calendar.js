import React, { Component } from 'react';
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';
import queryString from 'query-string';
import axios from 'axios';
import qs from 'qs';

export default class  Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate : ''
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
            currentDate : new Date().toLocaleString()
            })
        },1000)
    }


    render() {
        return (
        <div>

	<section id="home">
        <div className="overlay" style={{'background': 'linear-gradient(to top right, #43b581, #e9e9e9)'}}>
        </div>
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-sm-12">
					<div className="home-info">
						<div className="container">

							<div className="row">
								<div className="col-md-2"><img src={require('./Assets/images/logo.png')} alt="Italian Trulli" style={{'width': '150px','height': '50px'}}/></div>
								<div className="col-md-8"><h1 style={{'fontSize': '2.5em','marginBottom': '0px'}}>{localStorage.getItem('RoomName')}</h1></div>
								<div className="col-md-1">
										<button type="button" className="btn btn-default btn-circle btn-xl" onClick={() => {this.props.history.push('/form')}}><i className="fa fa-plus"></i>
										</button>

								</div>
								<div className="col-md-1">
										<button type="button" className="btn btn-default btn-circle btn-xl" onClick={() => {this.props.history.push('/homepage')}} ><i className="fa fa-home"></i>
										</button>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12"><h3 style={{'textAlign': 'center','marginTop': '0px'}}> { this.state.currentDate } </h3></div>
							</div>
							<div style= {{'padding':'20px','marginTop': '0px'}}>
								<div className="row">
                                <div className="container">
                                <div className="calendar-container">
                                        <div className="h_iframe">
                                            <img className="500pxtio" src="http://placehold.it/16x9"/>
                                            <iframe src={"https://calendar.google.com/calendar/embed?src=" + localStorage.getItem('RoomID') + "&ctz=Africa%2FCasablanca"} style={{'border': '0', 'width':'800px','height':'600px' ,'frameborder':'0' ,'scrolling':'no'}}></iframe>
                                        </div>  
                                </div>
                                </div>
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
