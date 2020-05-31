import React, { Component } from 'react';
import Login from './Components/Login'
import Sidebar from './Components/Sidebar'
import Locations from './Components/Locations'
import Tours from './Components/Tours'
import EditTours from './Components/EditTours'
import AddTours from './Components/AddTours'
import EditLocations from './Components/EditLocations'
import AddLocations from './Components/AddLocations'
import Settings from './Components/Settings'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activeView: "",
      location: "",
      tour: "",
      user: "assistant"
    }
  }

  onChangeLocation(location) {
    this.setState({
      location: location
    });
    console.log(this.state.location);
  }
  
  getLocation(){
    return this.state.location
  }

  onChangeTour(tour) {
    this.setState({
      tour: tour
    });
    console.log(this.state.tour);
  }

  onChangeView(view) {
    this.setState({
      activeView: view
    });
    console.log(this.state.activeView);
  }

  selectedUser(user) {
    this.setState({
      user: user
    });
    console.log(this.state.user);
  }

  render() {
    //Render the correct screen
    switch (this.state.activeView) {
      case "Logout":
        return (
          <div><Login changeView={this.onChangeView.bind(this)} /></div>
        );
      case "Locations":
        return (
          <div><Sidebar changeView={this.onChangeView.bind(this)} />
            <Locations changeView={this.onChangeView.bind(this)} changeLocation={this.onChangeLocation.bind(this)} user={this.selectedUser.bind(this)} className="Main" /></div>
        );
      case "Tours":
        return (
          <div><Sidebar changeView={this.onChangeView.bind(this)} />
            <Tours changeView={this.onChangeView.bind(this)} changeTour={this.onChangeTour.bind(this)} user={this.selectedUser.bind(this)} className="Main" /></div>
        );
      case "EditTours":
        return (
          <div><Sidebar changeView={this.onChangeView.bind(this)} />
            <EditTours changeView={this.onChangeView.bind(this)} changeTour={this.onChangeTour.bind(this)} user={this.selectedUser.bind(this)} className="Main" /></div>
        );
      case "AddTours":
        return (
          <div><Sidebar changeView={this.onChangeView.bind(this)} />
            <AddTours changeView={this.onChangeView.bind(this)} changeTour={this.onChangeTour.bind(this)} user={this.selectedUser.bind(this)} className="Main" /></div>
        );
      case "EditLocations":
        return (
          <div><Sidebar changeView={this.onChangeView.bind(this)} />
            <EditLocations changeView={this.onChangeView.bind(this)} getLocation={this.state.location} user={this.selectedUser.bind(this)} className="Main" /></div>
        );
      case "AddLocations":
        return (
          <div><Sidebar changeView={this.onChangeView.bind(this)} />
            <AddLocations changeView={this.onChangeView.bind(this)} changeLocation={this.onChangeLocation.bind(this)} user={this.selectedUser.bind(this)} className="Main" /></div>
        );
      case "Settings":
        return (
          <div><Sidebar changeView={this.onChangeView.bind(this)} />
            <Settings changeView={this.onChangeView.bind(this)} user={this.selectedUser.bind(this)} className="Main" /></div>
        );
      //Assumes no activeView (eg. error)
      default:
        return (
          <div><Login changeView={this.onChangeView.bind(this)} /></div>
        );
    }
  }
}
