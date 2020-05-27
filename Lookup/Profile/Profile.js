import React, {Component} from 'react';
import {Divider, Header, Icon, List} from 'semantic-ui-react';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
      }
    
    skills = () => {
        for (let index = 0; index < this.props.user.skills.length; index++) {
        return(<List><List.Item><List.Description>{this.props.user.skills[index]}</List.Description></List.Item></List>)       
        }
    }
      
render() {
    
    return (
      <div className="content">
          <Divider horizontal>
                <Header as='h1'>
                <Icon name='user' />
                Profile
                </Header>
            </Divider>
            <List divided relaxed="very" size="large">
                <List.Item>
                    <List.Header>Username:</List.Header>
                    <List.Description>{this.props.user.name}</List.Description>
                </List.Item>
                <List.Item>
                    <List.Header>Name:</List.Header>
                    <List.Description>{this.props.user.displayName}</List.Description>
                </List.Item>
                <List.Item>
                    <List.Header>Role:</List.Header>
                    <List.Description>{this.props.user.role}</List.Description>
                </List.Item>
                <List.Item>
                    <List.Header>Skills:</List.Header>
                    <List.Description>{this.props.user.skills.join(', ')}</List.Description>
                </List.Item>
            </List>
    </div>
)
}
}