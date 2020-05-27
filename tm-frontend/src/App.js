import React, { Component } from 'react';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Locations from './Components/Locations'
import Tours from './Components/Tours'
import Settings from './Components/Settings'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
        activeView: "",
        user: "assistant"
    }
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

  render(){
  //Render the correct screen
  switch (this.state.activeView) {
    case "Logout":
      return(
      <div><Login changeView={this.onChangeView.bind(this)}/></div>
      );
    case "Dashboard":
      return(
        <div><Sidebar changeView={this.onChangeView.bind(this)}/>
        <Dashboard changeView={this.onChangeView.bind(this)} user={this.selectedUser.bind(this)} className="Main"/></div>
      );
    case "Locations":
      return(
        <div><Sidebar changeView={this.onChangeView.bind(this)}/>
        <Locations changeView={this.onChangeView.bind(this)} user={this.selectedUser.bind(this)} className="Main"/></div>
      );
    case "Tours":
      return(
        <div><Sidebar changeView={this.onChangeView.bind(this)}/>
        <Tours changeView={this.onChangeView.bind(this)} user={this.selectedUser.bind(this)} className="Main"/></div>
      );
    case "Settings":
      return(
        <div><Sidebar changeView={this.onChangeView.bind(this)}/>
        <Settings changeView={this.onChangeView.bind(this)} user={this.selectedUser.bind(this)} className="Main"/></div>
      );
    //Assumes no activeView (eg. error)
    default:
      return (
        <div><Login changeView={this.onChangeView.bind(this)}/></div>
      );
      }
}
}
