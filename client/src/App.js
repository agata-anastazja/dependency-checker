import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  // postData(`http://example.com/answer`, {answer: 42})
  // .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  // .catch(error => console.error(error));


  getData = (url = "") => {
    return fetch(url, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            mode: "no-cors",
        }
    })
  }

  callApi = async () => {

    const response = await this.getData('htpp://localhost:5000/api/1');
    //const body = await response.json();

    if (response.status !== 200) throw Error(response.message);

    return response;
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
