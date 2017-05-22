import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios'

import { BrowserRouter, Route} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import Home from './components/Home.js'
import ListHeroes from './components/HeroesList'
injectTapEventPlugin();



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      herolist : []
    }
  }

  componentWillMount() {
    axios.get('http://api.herostats.io/heroes/all')
    .then(response=>{
      let newData = this.state.herolist
      Object.keys(response.data).map(function(key, index) {
        return newData.push(response.data[key]);
      });
      this.setState({herolist: newData})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route  path='/list' component={()=><ListHeroes heroList={this.state.herolist}/>}/>
            {/*
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            */}
          </div>
        </BrowserRouter>
    </MuiThemeProvider>
    );
  }
}

export default App;
