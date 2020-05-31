import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form, Button, Input } from 'semantic-ui-react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'Login',
      apiResponse: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/get/users')
      .then(res => res.json())
      .then(res => {
        if (res && res.data) {
          this.setState({ apiResponse: [...this.state.apiResponse, ...res.data] })
        }
      });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  login = () => {
    const { name, password } = this.state
    fetch('http://localhost:9000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        password: password
      })
    })
    .then(res => {
      if (res.status == "202") {
        this.props.changeView('Locations');
      }
    })

    /*

      if (this.state.apiResponse.length <= 0) {
        return console.log("ERROR")
      } else {
        return this.state.apiResponse.map((val, key) => {
          console.log(val.login)
          if (val.login === true){
            this.props.changeView('Locations');
          }
        })
      }*/
  }

  dashboard() {

    this.props.changeView('Locations');
  }

  render() {
    const { name, password } = this.state 
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
          <Form text-align="left" onSubmit={this.login}>
            <Form.Field>
              <label>Username</label>

              <Input 
              name='name'
              value={name}
              onChange={this.handleChange}
              placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input 
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              placeholder='*********' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
