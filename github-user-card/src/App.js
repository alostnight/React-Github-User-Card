import React from 'react';
import User from './User';
import './App.css';

export default class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Followers</h1>
      <User />
    </div>
  );
}
}

