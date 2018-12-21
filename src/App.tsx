import * as React from 'react';
import './App.css';

import callAPI from './functions/jokes-api';

import logo from './logo.svg';

class App extends React.Component {
  public componentDidMount() {
    callAPI('jokes');  
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Browsette</h1>
        </header>
        <p className="App-intro" id="jokes">
          Loading...
        </p>
      </div>
    );
  }
}

export default App;
