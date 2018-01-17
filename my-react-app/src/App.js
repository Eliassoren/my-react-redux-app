import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './components/Comp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Comp data={1, 2, 3, 4}/>
      </div>
    );
  }
}


export default App;
