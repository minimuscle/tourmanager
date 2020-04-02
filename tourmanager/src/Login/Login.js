import React from 'react';
import './Login.css';
import 'semantic-ui-css/semantic.min.css';
import { Header, Icon, Button, Input } from 'semantic-ui-react';

function Login() {
  return (
    <div className="App">
      <body className="Login">
        <Header size="huge">Welcome.</Header><br/>
        <Header.Subheader>Please Login Below</Header.Subheader><br/>
        <Input className="text" placeholder="Username"/><br/>
        <Input className="text" placeholder="Password"/><br/>
        <Button primary>Login</Button>
      </body>
    </div>
  );
}

export default Login;
