import React, { Component } from 'react';
import '../style.css';

export default class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      activeView: 'Dashboard',
    };
  }

  profile() {
    this.props.changeView('Profile');
  }

  dashboard() {
    this.props.changeView('Dashboard');
  }

  taskView() {
    this.props.changeView('AddTask');
  }

  blockouts() {
    this.props.changeView('Blockouts');
  }

  staff() {
    this.props.changeView('Staff');
  }

  //This refreshes the page which "logs" you out until a login has been actually put in.
  logout = e => {
    e.preventDefault();
    window.location.reload();
  };

  render() {
    let blockouts;
    let tasks;
    let staff;

    //This checks the role and only displays the button if the person's role is correct
    if (
      this.props.user.role == 'Contractor' ||
      this.props.user.role == 'Manager'
    ) {
      blockouts = (
        <button onClick={this.blockouts.bind(this)} className="button">
          <p>
            <i
              className="fas fa-times-circle"
              style={{ paddingRight: '10px' }}
            />
            Blockouts
          </p>
        </button>
      );
    }

    if (
      this.props.user.role == 'Developer' ||
      this.props.user.role == 'Manager'
    ) {
      tasks = (
        <button onClick={this.taskView.bind(this)} className="button">
          <p>
            <i className="fas fa-tasks" style={{ paddingRight: '10px' }} />
            Tasks
          </p>
        </button>
      );
    }

    if (this.props.user.role == 'Manager') {
      staff = (
        <button onClick={this.staff.bind(this)} className="button">
          <p>
            <i className="fas fa-users" style={{ paddingRight: '10px' }} />
            Staff
          </p>
        </button>
      );
    }

    return (
      <div>
        <div className="sidebar">
          {//<img src={logo} alt="logo" className="sidebarLogo" />
          }
          <h5 style={{ textAlign: 'center' }}>Dale's Project Manager</h5>
          <button onClick={this.profile.bind(this)} className="profile button">
            <p>
              <i
                className="fas fa-user-circle fa-2x"
                style={{ paddingRight: '10px' }}
              />
              Profile
            </p>
          </button>
          <button onClick={this.dashboard.bind(this)} className="button">
            <p>
              <i className="fas fa-home" style={{ paddingRight: '10px' }} />
              Dashboard
            </p>
          </button>

          {tasks}
          {blockouts}
          {staff}
          <hr />

          <button onClick={this.logout.bind(this)} className="logout">
            <p>
              <i
                className="fas fa-sign-out-alt"
                style={{ paddingRight: '10px' }}
              />
              Log Out
            </p>
          </button>
        </div>
      </div>
    );
  }
}
