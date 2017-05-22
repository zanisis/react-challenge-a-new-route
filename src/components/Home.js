import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header'
class Home extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    )
  }
}

export default Home
