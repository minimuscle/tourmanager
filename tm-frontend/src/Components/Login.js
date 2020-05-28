import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form, Button } from 'semantic-ui-react'

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      activeView: 'Login',
      apiResponse: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/api')
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  dashboard() {
    this.props.changeView('Locations');
  }

  render() {
  return (
    <div className="App">
      <div className="Login">
        <Header as="h1" icon>
          <Icon name="sign-in" />
          Welcome
          <Header.Subheader>
            Please Login Below
          </Header.Subheader>
          </Header>
          {/**TODO: THIS LINE IS TO BE REMOVED, BUT SHOULD BE REMOVED ONCE API IS WORKING PROPERLY */}
          <p style={{color: 'black'}}>{this.state.apiResponse}</p>
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
