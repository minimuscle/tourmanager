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
    fetch('http://localhost:9000/locations')
      .then(res => res.json())
      .then(res => {
        if (res && res.data) {
          this.setState({ apiResponse: [...this.state.apiResponse, ...res.data] })
        }
      });
  }

  renderUsers() {
    if (this.state.apiResponse.length <= 0) {
      return <div>Loading...</div>
    } else {
      return this.state.apiResponse.map((val, key) => {
        return <div key={key}>{val.name} | {val.age}</div>
      })
    }
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
          <Form text-align="left">
            <Form.Field>
              <label>Username</label>

              <input placeholder={this.props.activeView} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='*********' />
            </Form.Field>
            <Button type='submit' onClick={this.dashboard.bind(this)}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
