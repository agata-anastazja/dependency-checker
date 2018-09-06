import React, { Component } from 'react';
import DependencyTree from './DependencyTree.js'

class DependencyTreeContainer extends Component {
  state = {
    response: {}
  };
  //
  componentDidMount() {
    this.callApi(this.props.package_name, this.props.version)
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async (package_name, version) => {
    // const url = 'http://localhost:5000/api/' + package_name + "/" + version
    const url = 'http://localhost:5000/api/express'
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    return body["data"];
  };

  render() {
    return (
      <div>
        <DependencyTree data={this.state.response} />
      </div>
    );
  }
}

export default DependencyTreeContainer;
