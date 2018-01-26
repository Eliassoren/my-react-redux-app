import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import '../styles/app.css';
import Home from '../components/home';
import About from '../components/about';
import Todo from '../components/todo';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2 className="app-title"><Link className="link" to="/">My React app</Link></h2>
          <div className="app-tabs">
            <Link className="app-home-tab app-tab link" to="/">Home</Link>
            <Link className="app-about-tab app-tab link" to="/about-us">About</Link>
            <Link className="app-todo-tab app-tab link" to="/todo-list">Todo</Link>
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
