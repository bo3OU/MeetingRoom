import React, { Component } from 'react';
import './Assets/css/vegas.min.css';
import './Assets/css/font-awesome.min.css';
import './Assets/css/templatemo-style.css';
import './Assets/css/custom.css';
import queryString from 'query-string';
import axios from 'axios';
import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class  Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startHour: -1,
            endHour:-1,
            startMin:-1,
            endMin:-1,
            Title:'',
            Date:'',
            HoursList : [8,9,10,11,12,13,14,15,16,17,18,19,20],
            MinList : [0,15,30,45],
            currentDate: '',
        }
        this.addevent = this.addevent.bind(this)
    }

    componentDidMount() {
        setInterval( () => {
          this.setState({
            currentDate : new Date().toLocaleString()
          })
        },1000)
      }
    addevent() {
      var self = this;
      
      if (this.state.Date =='' || this.state.endHour == -1 || this.state.endMin==-1 || this.state.startHour==-1 || this.state.startMin==-1 || this.state.Title =='') {
        toast.warn('verifiez si un champ est vide ')
      }
      else {
        console.log('addevevnt')
        var startHour = parseInt(this.state.startHour)
        var startMin = parseInt(this.state.startMin)
        var endHour = parseInt(this.state.endHour)
        var endMin = parseInt(this.state.endMin)
        if(startHour > endHour || (startHour == endHour && startMin >= endMin)) {
          toast.warn('verifiez l\'heure de debut et de fin')
        }
        else {
          var datestart = this.state.Date + 'T' + this.state.startHour + ':' + this.state.startMin+':00Z'
          var dateend= this.state.Date + 'T' + this.state.endHour + ':' + this.state.endMin+':00Z'
          var url = 'https://www.googleapis.com/calendar/v3/calendars/'+ localStorage.getItem('RoomID') +'/events';
          //get events that
          console.log(datestart)
          console.log(dateend)
          var url = 'https://www.googleapis.com/calendar/v3/calendars/3itechnology.ma_69l3v7ftj563qq3e8td219t4bs@group.calendar.google.com/events?timeMin=' + datestart+ '&timeMax='+dateend;
          console.log(localStorage.getItem('token'))
          axios.get(url,
          {
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
            }
          }).then(function(response) {
            if(response.data.items.length > 0) {
              toast.warn('la salle sera reserve a ce moment')
            } else {
              console.log('else')
              axios.post(url, 
                {
                  "end": {
                    "dateTime": dateend
                  },
                  "start": {
                    "dateTime": datestart
                  },
                  "summary": self.state.Title
              },{
                  headers: {
                      'Authorization': 'Bearer '+ localStorage.getItem('token'),
                  },
                  params : {
                      'calendarId': localStorage.getItem('RoomID')
                  }
              }).then(function(response) {
                console.log('response')
                if(response.status == 200) { 
                  toast.success('Evenement ajoute avec succes')
                }
              }).catch(function(error) {
                console.log('something wrong here')
                toast.error(error.message)
                self.props.history.push('/login')
              })
            }
          }).catch(function(error){
            console.log('here')
            toast.error(error.message)
            return;
          })
          // axios.get('https://www.googleapis.com/calendar/v3/calendars/3itechnology.ma_69l3v7ftj563qq3e8td219t4bs@group.calendar.google.com/events?timeMax=' + dateend).then(function(response) {
          //   console.log(response.data.items)
          //   if(response.data.items[response.data.items.length - 1].end.dateTime > datestart ){
          //     toast.warn('la salle sera reserve a ce moment')
          //     return;
          //   }
          // }).catch(function(error){
          //   toast.error(error.message)
          //   return;
          // })


        }
      }
    }

    render() {
      return ( 
        <div>

	<section id="home">
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
        />
		<div className="overlay" style={{'background': 'linear-gradient(to top right, #43b581, #e9e9e9)'}}></div>
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-sm-12">
					<div className="home-info">
						<div className="container">

							<div className="row">
								<div className="col-md-2"><img src={require('./Assets/images/logo.png')} alt="Italian Trulli" style={{'width': '150px','height': '50px'}}/></div>
								<div className="col-md-8"><h1 style={{'fontSize': '2.5em','marginBottom': '0px'}}>{localStorage.getItem('RoomName')}</h1></div>
								<div className="col-md-1">
										<button type="button" className="btn btn-default btn-circle btn-xl" onClick={() => {this.props.history.push('/homepage')}}><i className="fa fa-home"></i>
										</button>

								</div>
								<div className="col-md-1">
										<button type="button" className="btn btn-default btn-circle btn-xl" onClick={() => {this.props.history.push('/calendar')}}><i className="fa fa-calendar"></i>
										</button>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12"><h3 style={{'textAlign': 'center','marginTop': '0px'}}> { this.state.currentDate } </h3></div>
							</div>

							<div style= {{'padding':'20px','marginTop': '0px'}}>
								<div className="row">
                                <div className='col-md-3'></div>
                    <div className="col-md-6">
                    <div className="panel panel-default">
                        {/* <div className="panel-heading">Meeting Info</div> */}
                        <div className="panel-body">
                          <form>
                            <div className="row">
                            <div className="container">
                                <h5>sujet</h5>
                              <input className="form-control" type="text" placeholder="Title of event" 
                              value={this.state.Title}
                              onChange={(e) => this.setState({Title: e.target.value})}/>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="container">
                                  <h5>start</h5>
                                  <div className="col-xs-6" >
                                    <select className="custom-select" 
                                    // style={{'te  xtAlignLast': 'center'}}
                                    value={this.state.startHour}
                                    onChange={(e) => this.setState({startHour: e.target.value})}>
                                      <option value="-1" defaultValue>heures</option>
                                      {Object.keys(this.state.HoursList).map((item, i) => (
                                                <option value={this.state.HoursList[item]} key={i}>{this.state.HoursList[item]}</option>
                                        ))}
                                    </select>
                                  </div>
                                  <div className="col-xs-6">
                                    <select className="custom-select" 
                                    // style={{'textAlignLast': 'center'}}
                                    value={this.state.startMin}
                                    onChange={(e) => this.setState({startMin: e.target.value})}>
                                        <option value="-1">minutes</option>
                                        {Object.keys(this.state.MinList).map((item, i) => (
                                                <option value={this.state.MinList[item]} key={i}>{this.state.MinList[item]}</option>
                                        ))}
                                    </select>
                                  </div>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="container">
                                    <h5>End</h5>
                                    <div className="col-xs-6" >
                                        <select className="custom-select" 
                                            // style={{'textAlignLast': 'center'}}
                                            value={this.state.endHour}
                                            onChange={(e) => this.setState({endHour: e.target.value})}
                                        >
                                            <option value="-1" defaultValue>heures</option>
                                            {Object.keys(this.state.HoursList).map((item, i) => (
                                                    <option value={this.state.HoursList[item]} key={i}>{this.state.HoursList[item]}</option>
                                            ))}
                                      </select>
                                    </div>
                                    <div className="col-xs-6">
                                      <select className="custom-select" 
                                    //   style={{'textAlignLast': 'center'}}
                                      value={this.state.endMin}
                                      onChange={(e) => this.setState({endMin: e.target.value})}>
                                          <option value="-1" defaultValue>minutes</option>
                                          {Object.keys(this.state.MinList).map((item, i) => (
                                                <option value={this.state.MinList[item]} key={i}>{this.state.MinList[item]}</option>
                                        ))}
                                      </select>
                                  </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="container">
                                    <h5>Date</h5>
                                  <input  
                                  type='date'  
                                    className="form-control" 
                                    value={ this.state.Date } 
                                    placeholder="sujet ou but de la reunion"
                                    onChange={e => this.setState({ Date : e.target.value })}    
                                />
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row" >
                                <div className="container">
                                  <button className="btn btn-primary" type="button" onClick={() => {this.addevent()}}>Submit</button>
                                </div>
                            </div>
                          </form>
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