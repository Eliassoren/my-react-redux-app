import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import '../styles/app.css';
import Home from '../components/home';
import About from '../components/about';
import Todo from '../components/todo/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My React App</h1>
          <div className="App-tabs">
            <Link className="App-home-tab App-tab link" to="/">Home</Link>
            <Link className="App-about-tab App-tab link" to="/about-us">About</Link>
            <Link className="App-todo-tab App-tab link" to="/todo-list">Todo</Link>
          </div>
        </header>

        <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={About}/>
            <Route exapt path="/todo-list" component={Todo}/>
        </main>
      </div>
    );
  }
}


export default App;
