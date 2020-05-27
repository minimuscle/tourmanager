import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Button, Form, Input, Radio, Checkbox, TextArea } from 'semantic-ui-react'



export default class EditLocation extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="dashboard">
        <div className="header">
          <Header as='h1' icon>
            <Icon name='map signs' />
              Edit Locations
            <Header.Subheader>
              Edit the details of each specific location
            </Header.Subheader>
          </Header>
          <div className='editForms'>
            <Form>
              <Form.Field>
                <label className="floatLeft">Location Name</label>
                <Input placeholder='Location Name' />
              </Form.Field>
              <Form.Field>
                <label className="floatLeft">Co-ordinates</label>
                <Input placeholder="45, 23" />
              </Form.Field>
              <Form.Field>
                <label className="floatLeft">Description</label>
                <TextArea placeholder="A Bag of potatoes is a dangerous thing"/>
              </Form.Field>

              {/* This will loop through every single location and display them as a checkbox */}
              <Form.Field>
                <label>Length:</label>
                <Input placeholder="8"/>
              </Form.Field>
              <Form.Button primary content="Save Location"></Form.Button>
            </Form>

          </div>
        </div>

      </div>
    );
  }
}