import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      activeView: '',
    };
  }

  dashboard() {
    this.props.changeView('Dashboard');
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
          
        </div>
      </div>
    );
  }
}
