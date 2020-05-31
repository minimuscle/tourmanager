import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form, Input, TextArea, Dropdown } from 'semantic-ui-react'



export default class EditLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      locationsName: []
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, coordinates, description, length } = this.state

    fetch('http://localhost:9000/api/edit/location', {
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

  componentDidMount() {
    fetch('http://localhost:9000/api/get/locations')
      .then(res => res.json())
      .then(res => {
        if (res && res.data) {
          this.setState({ apiResponse: [...this.state.apiResponse, ...res.data] })
        }
      });
    this.setState({
      name: this.props.getLocation
    })
  }
  /**
   * TODO: Set the list to be dynamic by the number of people
   */

  getLocations() {
    let locations = [];
    if (this.state.apiResponse.length <= 0) {
      return <div>Loading...</div>
    } else {
      return (
        locations = this.state.apiResponse.map((val, key) => ({id: key, value: val.name, isChecked: false})),
        console.log(locations)
      )
    }
  }

  render() {
    const { name, coordinates, description, length } = this.state
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
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label className="floatLeft">Location Name<br/><span>(Edit Location by typing name here)</span></label>
                
                <Input
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  placeholder='Location Name'
                />
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
                <label className="floatLeft">Length:</label>
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