import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Babs <br /> 
            Hello Claus <br /> 
            Hello Claus <br /> 
            Hello Irene Polanka <br /> 
            Hello Walter Polanka <br /> 
            Hello Sepp<br /> 
            Hello Polanka und Ebinger Family <br />
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className="App-intro">
          I was changed on the feature branch
        <p>
      </div>
    );
  }
}

export default App;
