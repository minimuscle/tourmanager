import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Administrator', value: 'admin' },
  { key: 's', text: 'Assistant', value: 'assistant' }
]

//These 'users' are just placeholders for the actual users once the API is done
const users = [
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
    super();
  }

  handleSubmit() {
    this.setState({
      username: '',
      password: '',
      role: 'Role'
    })
  }

  render() {
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
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Input
              label='Username'
              placeholder="JohnSmithy"
              name="username" />
            <Form.Input
              label='Password'
              placeholder="*********"
              name="password" />
            <Form.Select fluid label="Role" options={options} placeholder="Role" />
            <Form.Button primary content="Create Account"></Form.Button>
          </Form>
        </div>


        <div className="settingsTab">
          <Header as="h2">
            Change Password
          </Header>
          <Form onSubmit={this.handleSubmit.bind(this)}>
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
        </div>

        <div className="settingsTab2">
          <Header as="h2">
            Deactivate User
          </Header>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Select fluid label="Role" options={users} placeholder="Role" />
            <Form.Button negative content="Deactivate User"></Form.Button>
          </Form>
        </div>



      </div>

    );
  }
}
