import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from '../media/logo.svg';
import '../assets/app.css';
import Home from '../components/home';
import About from '../components/about';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React App</h1>
          <div className="App-tabs">
            <Link className="App-home-tab App-tab link" to="/">Home</Link>
            <Link className="App-about-tab App-tab link" to="/about-us">About</Link>
          </div>
        </header>
        <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={About}/>
        </main>
      </div>
    );
  }
}


export default App;
