import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Table, Button } from 'semantic-ui-react'



export default class Tours extends Component {

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
          {/*This is just a placeholder for the tours*/}
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
                  <Button size='small'>Edit Tours</Button>
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
              <Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row><Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SCP-1689 Tour</Table.Cell>
                <Table.Cell>Walking</Table.Cell>
                <Table.Cell>Bag of Potatoes, Bag of Potatoes, Bag of Potatoes, Bag of Potatoes</Table.Cell>
                <Table.Cell>32 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}