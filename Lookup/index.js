import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';


export default class Main extends Component {
  constructor(props) {
    super();
    this.state = {
        activeView: "Dashboard"
    }
  }
  onChangeView(view) {
    this.setState({
      activeView: view
    });
    console.log(this.state.activeView);
  }

  

  render() {
    //Render the correct screen
    switch (this.state.activeView) {
      case "Profile":
        return (
          <div>
            <Sidebar
              changeView={this.onChangeView.bind(this)}
              user={this.props.user}
            />
            <Profile
            user={this.props.user}
            />
          </div>
        );
      case "Dashboard":
        return (
          <div>
            <Sidebar
              changeView={this.onChangeView.bind(this)}
              user={this.props.user}
            />
            <Dashboard 
            changeView={this.onChangeView.bind(this)}
            user={this.props.user}
            />
          </div>
        );
      case "Staff":
      return (
        <div>
          <Sidebar
            changeView={this.onChangeView.bind(this)}
            user={this.props.user}
          />
        </div>
      );

      //If not exist, this.
      default:
        return (
          <div>
            <Sidebar
              changeView={this.onChangeView.bind(this)}
              user={this.props.user}
            />
            <Dashboard 
            activeView={this.state.activeView}
            user={this.props.user}
            />
          </div>
        );
    }
  }
}
