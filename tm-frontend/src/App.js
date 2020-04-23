import React, { Component } from 'react';
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Sidebar from './Components/Sidebar/Sidebar'
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
      assistant: user
    });
    console.log(this.state.user);
  }

  render(){
  //Render the correct screen
  switch (this.state.activeView) {
    case "Login":
      return(
      <div><Login/></div>
      );
    case "Dashboard":
      return(
        <div><Sidebar/>
        <Dashboard user={this.selectedUser.bind(this)}/></div>
      );
    //Assumes no activeView (eg. error)
    default:
      return (
        <div><Login changeView={this.onChangeView.bind(this)}/></div>
      );
      }
}
}
