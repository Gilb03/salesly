import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import navbar from './components/navbar';
import hero from './components/hero';
import about from './components/About';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Route path='/' component={navbar}></Route>
         <Route exact path='/' component={hero}></Route>
         <Route path='/about' component={about}></Route>
      </div>
    );
  }
}

export default App;