import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Administrator', value: 'admin' },
  { key: 's', text: 'Assistant', value: 'assistant' }
]

//These 'users' are just placeholders for the actual users once the API is done
let users = [
  { text: 'James', value: 'james' },
  { text: 'Jimmy', value: 'jimmy' },
  { text: 'Jane', value: 'jane' },
  { text: 'Josh', value: 'josh' },
  { text: 'Justin', value: 'justin' },
  { text: 'Jake', value: 'jake' },
  { text: 'Jerimiah', value: 'jerimiah' },
  { text: 'Judas', value: 'judas' },
  { text: 'Jannel', value: 'jannel' },
  { text: 'June', value: 'june' },
]

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  componentDidMount() {
    fetch('http://localhost:9000/api/get/users')
      .then(res => res.json())
      .then(res => {
        if (res && res.data) {
          this.setState({ apiResponse: [...this.state.apiResponse, ...res.data] })
        }
      });
      this.renderUsers();
  }

  renderUsers() {
    if (this.state.apiResponse.length <= 0) {
      users = []
      console.log("ERROR")
    } else {
      users = this.state.apiResponse.map((val, key) => ({ key: key, text: val.username, value: val.username }));
      console.log("GOOD TO GO")
    }
  }

  createUser = () => {
    const { name, password, type } = this.state
    fetch('http://localhost:9000/api/add/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        password: password,
        type: type,
        active: true,
        login: false
      })
    })
  }

  handleSubmit() {
    this.setState({
      username: '',
      password: '',
      role: 'Role'
    })
  }

  render() {
    const { name, password, type } = this.state
    this.renderUsers()
    return (
      <div className="dashboard">
        <div className="header">
          <Header as='h1' icon>
            <Icon name='settings' />
        Account Settings
        <Header.Subheader>
              Manage your account settings and set e-mail preferences.
        </Header.Subheader>
          </Header>
        </div>

        <div className="settingsTab">
          <Header as="h2">
            Create new Account
          </Header>
          <Form onSubmit={this.createUser}>
            <Form.Input
              label='Username'
              placeholder="JohnSmithy"
              name="name"
              value={name}
              onChange={this.handleChange} />
            <Form.Input
              type='password'
              label='Password'
              placeholder="*********"
              name="password"
              value={password}
              onChange={this.handleChange} />
            <Form.Select fluid 
            label="Role" 
            options={options}
            name='type' 
            value={type} 
            placeholder="Role" 
            onChange={this.handleChange} />
            <Form.Button primary content="Create Account"></Form.Button>
          </Form>
        </div>

        {/* THIS BLOCK IS ONLY FOR LATER FUNCTIONALITY
        <div className="settingsTab">
          <Header as="h2">
            Change Password
          </Header>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Select fluid label="User" options={users} placeholder="User" />
            <Form.Input
              label='Old Password'
              placeholder="*********"
              name="password" />
            <Form.Input
              label='New Password'
              placeholder="*********"
              name="password" />
            <Form.Input
              label='Cornfirm New Password'
              placeholder="*********"
              name="password" />
            <Form.Button positive content="Change Password"></Form.Button>
          </Form>
        </div>*/}

        <div className="settingsTab2">
          <Header as="h2">
            Deactivate User
          </Header>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Select fluid label="User" options={users} placeholder="User"/>
            <Form.Button negative content="Deactivate User"></Form.Button>
          </Form>
        </div>



      </div>

    );
  }
}
