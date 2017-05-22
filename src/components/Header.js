import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'

import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab:{
    marginLeft: 200,
  },
  tabs:{
    minHeight: -1,
  }
};

class Header extends Component {
  constructor(props) {
    super(props)
  }

  handleActive(tab){
    // alert(tab.props['data-route'])
    this.props.history.push('/some/path');

  }

  render(){
    return(
      <div>
          <Link to='/' style={styles.tab}>
            Page Home
          </Link>
          <Link to='/list' style={styles.tab}>
            Page List
          </Link>
      </div>
    )
  }
}

export default Header