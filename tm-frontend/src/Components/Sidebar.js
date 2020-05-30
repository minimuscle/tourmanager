import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './style.css'

export default class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      activeView: 'Dashboard',
    };
  }

  locations() {
    this.props.changeView('Locations');
  }

  tours() {
    this.props.changeView('Tours');
  }

  settings() {
    this.props.changeView('Settings');
  }

  logout() {
    this.props.changeView('Logout');
  }

  //This refreshes the page which "logs" you out until a login has been actually put in.
  logout = e => {
    e.preventDefault();
    window.location.reload();
  };

  render() {
   return (
      <div>
        <div className="sidebar">
          <button className="sideButtons" onClick={this.locations.bind(this)}>
            <Icon name='map' className='icons'/>Locations
          </button><br/>
          <button className="sideButtons" onClick={this.tours.bind(this)}>
            <Icon name='map signs' className='icons'/>Tours
          </button><br/>
          <button className="sideButtons settingsBtn" onClick={this.settings.bind(this)}>
            <Icon name='cog' className='icons'/>Settings
          </button><br/>
          <button className="sideButtons logout" onClick={this.logout.bind(this)}>
            <Icon name='sign-out' className='icons'/>Logout
          </button>
        </div>
      </div>
    );
  }
}
