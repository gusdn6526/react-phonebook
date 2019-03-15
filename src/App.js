import React, { Component } from 'react'; // JSX 를 사용하려면, 꼭 React 를 import 해주어야 합니다.
import logo from './logo.svg';
import './App.css';

//이렇게, import 를 하는 것은, 우리가 webpack 을 사용하기에 가능한 작업입니다.

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
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
      </div>
    );
  }
}

export default App;
