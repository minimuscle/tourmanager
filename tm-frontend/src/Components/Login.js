import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form, Button } from 'semantic-ui-react'

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      activeView: 'Login',
    };
  }

  dashboard() {
    this.props.changeView('Locations');
  }

  render() {
  return (
    <div className="App">
      <div className="Login">
        <Header as="h1" icon color='white'>
          <Icon name="sign-in" />
          Welcome
          <Header.Subheader>
            Please Login Below
          </Header.Subheader>
          </Header>
          <Form text-align="left">
            <Form.Field>
              <label>Username</label>
              <input placeholder={this.props.activeView} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='*********'/>
            </Form.Field>
            <Button type='submit' onClick={this.dashboard.bind(this)}>Submit</Button>
          </Form>
      </div>
    </div>
  );
}
}
