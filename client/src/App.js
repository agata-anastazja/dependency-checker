import React, { Component } from 'react';
import './App.css';
import DependencyTreeContainer from './components/DependencyTreeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DependencyTreeContainer />
      </div>
    );
  }
}

export default App;
