import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Form, Input, Radio, Checkbox } from 'semantic-ui-react'



export default class EditTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      isSelected: false,
      items: []
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleRadioChange = (e, { value }) => this.setState({ value })

  handler = (e) => {
    try {
    var isSelected = !this.state.isSelected,
        items = this.state.items.push(e.target.value);
    this.setState({isSelected: isSelected, items: items})

    console.log(isSelected + " PLUS " + items)
    } finally{
      console.log("error")
    }
  }

  handleSubmit = () => {
    const { name, value, location, time } = this.state
    console.log(name +"PLUS"+ value +"PLUS" + location +"PLUS" + time)
    fetch('http://localhost:9000/api/edit/tour', {
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

  componentDidMount() {
    fetch('http://localhost:9000/api/get/tours')
      .then(res => res.json())
      .then(res => {
        if (res && res.data) {
          this.setState({ apiResponse: [...this.state.apiResponse, ...res.data] })
        }
      });
      
    this.setState({
      name: this.props.getTour
    })

    
  }

  getLocations() {
    let locations = [];
    try{
    if (this.state.apiResponse.length <= 0) {
      return console.log("NOT VALID")
    } else {
      return (
        this.state.apiResponse.map((val, key) => {
          return locations = [...locations, ...[{id: key, value: val.name, isChecked: false}]]}),
        console.log(locations))
        
    }
  } finally {

  }
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