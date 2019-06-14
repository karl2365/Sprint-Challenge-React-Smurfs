import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
  }

  addItem = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      
      .catch(error => console.log(error));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs)
    return (
      <div className="App">
                <div className="navLink">
          <NavLink exact to='/'>Village</NavLink>
          <NavLink exact to='/smurf-form'>Add To Village</NavLink>
        </div>
        <Route path='/smurf-form'
          render={props => (<SmurfForm {...props} addItem={this.addItem} />)}
        />
        
        <Route exact path='/'
          render={props => (<Smurfs {...props} smurfs={this.state.smurfs} />)}
        />
      </div>
    );
  }
}

export default App;
