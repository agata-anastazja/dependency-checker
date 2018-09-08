import DependencyForm from './DependencyForm'
import DependencyTreeContainer from './DependencyTreeContainer'
import React, { Component } from 'react';

class FormContainer extends Component {

  render() {
    return (
      <div>
        <DependencyForm />
        <DependencyTreeContainer />
      </div>
    );
  }
}

export default FormContainer;
