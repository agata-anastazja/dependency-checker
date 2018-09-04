import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:5000/api/1');

    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    console.log(body["data"])

    return JSON.stringify(body["data"]);
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
