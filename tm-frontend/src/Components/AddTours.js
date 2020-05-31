import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form, Input, TextArea, Radio } from 'semantic-ui-react'



export default class AddTours extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      coordinates: '',
      description: '',
      length: '',
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleRadioChange = (e, { value }) => this.setState({ value })

  handleSubmit = () => {
    const { name, value, location, time } = this.state

    fetch('http://localhost:9000/api/add/tour', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        type: value,
        locations: [location],
        time: time
      })
    })

    this.props.changeView("Tours");
  }

  render() {
    const { name, location, time, value } = this.state
    return (
      <div className="dashboard">
        <div className="header">
          <Header as='h1' icon>
            <Icon name='map marker' />
              Edit Tours
            <Header.Subheader>
              Edit the details of each specific tour
            </Header.Subheader>
          </Header>
          <div className='editForms'>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label className="floatLeft">Tour Name</label>
                <Input
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  placeholder='Tour Name'
                />
              </Form.Field>
              <Form.Group inline>
                <label>Type</label>
                <Form.Field
                  control={Radio}
                  label='Walking'
                  value='Walking'
                  checked={value === 'Walking'}
                  onChange={this.handleRadioChange}
                />
                <Form.Field
                  control={Radio}
                  label='Stationary'
                  value='Stationary'
                  checked={value === 'Stationary'}
                  onChange={this.handleRadioChange}
                />
              </Form.Group>
              {/* This will loop through every single location and display them as a checkbox */}
              <Form.Field>
                <label>Locations:</label>
                <Input
                name='location'
                value={location}
                onChange={this.handleChange}
                placeholder="Bag of Potatoes, Potatoes, SCP1688"
                />
              </Form.Field>
              <Form.Field>
                <label className="floatLeft">Length (In Seconds):</label>
                <Input
                  name='time'
                  value={time}
                  onChange={this.handleChange}
                  placeholder="8" />
              </Form.Field>
              <Form.Button primary content="Save Tour"></Form.Button>
            </Form>
          </div>
        </div>

      </div>
    );
  }
}