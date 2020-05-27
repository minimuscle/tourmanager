import React, { Component } from 'react';
import './style.css'
import { Header, Icon, Table, Button } from 'semantic-ui-react'



export default class Location extends Component {

  render() {
    return (
      <div className="dashboard">
        <div className="header">
          <Header as='h1' icon>
            <Icon name='map signs' />
        Locations
        <Header.Subheader>
              View locations of tours
        </Header.Subheader>
          </Header>
        </div>

        <div className='locations'>
          {/*This is just a placeholder for the locations*/}
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
                    <Icon name='map marker' /> Add New Location
                  </Button>
                  <Button size='small'>Edit Locations</Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Coordinates</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Bag of Potatoes</Table.Cell>
                <Table.Cell>45, 23</Table.Cell>
                <Table.Cell>SCP-1689 is an infinite sack of potatoes. These potatoes continue to grow exponentially</Table.Cell>
                <Table.Cell>8 Seconds</Table.Cell>
                <Table.Cell><Button icon size="small"><Icon name="edit"></Icon></Button></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

