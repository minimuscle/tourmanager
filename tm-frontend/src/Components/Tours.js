import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Table, Button } from 'semantic-ui-react'



export default class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/tours')
      .then(res => res.json())
      .then(res => {
        if (res && res.data) {
          this.setState({ apiResponse: [...this.state.apiResponse, ...res.data] })
        }
      });
  }

  renderTours() {
    if (this.state.apiResponse.length <= 0) {
      return <div>Loading...</div>
    } else {
      return this.state.apiResponse.map((val, key) => {
        return (
          <Table.Row key={key}>
            <Table.Cell>{val.name}</Table.Cell>
            <Table.Cell>{val.type}</Table.Cell>
            <Table.Cell>{val.locations.join(', ')}</Table.Cell>
            <Table.Cell>{val.time} Seconds</Table.Cell>
            <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
          </Table.Row>
        )
      })
    }
  }


  editTours() {
    this.props.changeView('EditTours');
  }

  render() {
    return (
      <div className="dashboard">
        <div className="header">
          <Header as='h1' icon>
            <Icon name='move' />
        Tours
        <Header.Subheader>
              View Tours
        </Header.Subheader>
          </Header>
        </div>

        <div className='locations'>
          <Table striped celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='5'>
                  <Button
                    floated='right'
                    icon
                    labelPosition='left'
                    primary
                    size='small'
                  >
                    <Icon name='map marker' /> Add New Tour
                  </Button>
                  <Button size='small' onClick={this.editTours.bind(this)}>Edit Tours</Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Locations</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.renderTours()}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}