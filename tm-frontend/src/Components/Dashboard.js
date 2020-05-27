import React from 'react';
import './style.css'
import { Header } from 'semantic-ui-react'

function App() {
  return (
    <div className="dashboard">
      <div className="header">
        <Header as='h1'>
        Dashboard
        </Header>
      </div>
    </div>
  );
}

export default App;
