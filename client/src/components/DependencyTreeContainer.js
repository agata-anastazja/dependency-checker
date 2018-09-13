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
      .then( res =>  this.setState({ response: res }))
      .catch(err => console.log(err));
    }
  }

  callApi = async (package_name) => {
    const url = 'http://localhost:5000/api/' + package_name
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(response.message);
    return body["data"];
  };

  render() {
    return (
      <div>
        {
          (this.state.response !== undefined) ?
             <DependencyTree data={this.state.response} />
           : <div />
        }
      </div>
    );
  }
}

export default DependencyTreeContainer;
