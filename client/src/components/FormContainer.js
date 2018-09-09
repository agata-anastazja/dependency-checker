import DependencyForm from './DependencyForm'
import DependencyTreeContainer from './DependencyTreeContainer'
import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      package_name: ""
    };
  }

  handleFormSubmit = async (package_name) => {
    await this.setState({package_name: package_name});
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
