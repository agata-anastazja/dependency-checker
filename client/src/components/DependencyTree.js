import React, { Component } from 'react';

class DependencyTree extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async (package_name, version) => {
    const url = 'http://localhost:5000/api/' + package_name + "/" + version
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    return JSON.stringify(body["data"]);
  };

  render() {
    return (
      <div>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default DependencyTree;
