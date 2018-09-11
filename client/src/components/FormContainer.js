import DependencyForm from './DependencyForm'
import DependencyTreeContainer from './DependencyTreeContainer'
import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      packageName: ""
    };
  }

  handleFormSubmit = async (packageName) => {
    await this.setState({packageName: packageName});
  }

  render() {
    return (
      <div>
        <DependencyForm onSubmit={this.handleFormSubmit}/>
        <DependencyTreeContainer packageName={this.state.packageName}/>
      </div>
    );
  };
};

export default FormContainer;
