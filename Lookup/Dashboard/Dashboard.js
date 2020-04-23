import React, { Component } from 'react';
import {
  Popup,
  Button,
  Table,
  Icon,
  Divider,
  Header,
  Transition,
} from 'semantic-ui-react';
import '../style.css';

const ganttStyles = {
  backgroundColor: 'red',
  display: 'inline-block',
  color: 'white',
  height: '30px',
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      items: 3,
    };
  }

  render() {
    return (<h1>Hi</h1>);
    }
}

export default Dashboard;
