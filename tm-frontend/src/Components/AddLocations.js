import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form, Input, TextArea } from 'semantic-ui-react'



export default class AddLocations extends Component {
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

  handleSubmit = () => {
    const { name, coordinates, description, length } = this.state

    fetch('http://localhost:9000/api/add/location', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        coordinates: coordinates,
        description: description,
        time: length
      })
    })

    this.props.changeView("Locations");
  }

  render() {
    const { name, coordinates, description, length } = this.state
    return (
      <div className="dashboard">
        <div className="header">
          <Header as='h1' icon>
            <Icon name='map signs' />
              Add Locations
            <Header.Subheader>
              Create a new location
            </Header.Subheader>
          </Header>
          <div className='editForms'>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label className="floatLeft">Location Name</label>
                <Input
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  placeholder='Location Name' />
              </Form.Field>
              <Form.Field>
                <label className="floatLeft">Co-ordinates</label>
                <Input
                  name='coordinates'
                  value={coordinates}
                  onChange={this.handleChange}
                  placeholder="45, 23" />
              </Form.Field>
              <Form.Field>
                <label className="floatLeft">Description</label>
                <TextArea
                  name='description'
                  value={description}
                  onChange={this.handleChange}
                  placeholder="A Bag of potatoes is a dangerous thing" />
              </Form.Field>
              <Form.Field>
                <label>Length:</label>
                <Input
                  name='length'
                  value={length}
                  onChange={this.handleChange}
                  placeholder="8" />
              </Form.Field>
              <Form.Button primary content="Save Location"></Form.Button>
            </Form>
          </div>
        </div>

      </div>
    );
  }
}