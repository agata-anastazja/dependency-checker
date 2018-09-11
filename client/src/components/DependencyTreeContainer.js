import React, { Component } from 'react';
import DependencyTree from './DependencyTree.js'

class DependencyTreeContainer extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (this.props.packageName !== prevProps.packageName){
      this.callApi(this.props.packageName, this.props.version)
      .then(async res => await this.setState({ response: res }))
      .catch(err => console.log(err));
    }
  }

  callApi = async (package_name) => {
    console.log("package_name in dependency tree 2", package_name)
    const url = 'http://localhost:5000/api/' + package_name
    console.log("attempt fetch")
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    return body["data"];
  };

  render() {
    console.log("package_name in dependency tree 1", this.props.packageName)
    console.log("response", this.state.response)
    return (
      <div>
        {
          (this.state.response !== undefined) ?
             <DependencyTree data={this.state.response} />
           : <div>loading</div>
        }
      </div>
    );
  }
}

export default DependencyTreeContainer;
