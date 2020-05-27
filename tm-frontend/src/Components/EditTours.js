import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Button, Form, Input, Radio, Checkbox } from 'semantic-ui-react'



export default class EditTours extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="dashboard">
        <div className="header">
          <Header as='h1' icon>
            <Icon name='move' />
              Edit Tours
            <Header.Subheader>
              Edit the details of each specific tour
            </Header.Subheader>
          </Header>
          <div className='editForms'>
                <Form>
                <Form.Field>
                  <label className="floatLeft">Tour Name</label>
                  <Input placeholder='Example 01' />
                </Form.Field>
                  <Form.Group inline>
                    <label>Type</label>
                    <Form.Field
                      control={Radio}
                      label='Walking'
                      value='1'
                      checked={value === '1'}
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      control={Radio}
                      label='Stationary'
                      value='2'
                      checked={value === '2'}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {/* This will loop through every single location and display them as a checkbox */}
                  <Form.Field>
                    <label>Locations:</label>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                    <Checkbox label='Bag Of Potatoes' /> <br/>
                  </Form.Field>
                  <Form.Button primary content="Save Tour"></Form.Button>
                </Form>

          </div>
        </div>

      </div>
    );
  }
}