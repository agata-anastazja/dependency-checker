import React, { Component } from 'react';
import DependencyTree from './DependencyTree.js'

class DependencyTreeContainer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.callApi(this.props.packageName, this.props.version)
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async (package_name, version = 'latest') => {
    console.log("package_name in dependency tree 2", package_name)
    const url = 'http://localhost:5000/api/' + package_name + '/' + version
    //const url = 'http://localhost:5000/api/express'
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    return body["data"];
  };

  render() {
    console.log("package_name in dependency tree 1", this.props.packageName)
    return (
      <div>
        {
          (this.props.packageName !== undefined) ?
             <DependencyTree data={this.state.response} />
           : <div>loading</div>
        }
      </div>
    );
  }
}

export default DependencyTreeContainer;
