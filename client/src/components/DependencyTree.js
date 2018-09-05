import React, { Component } from 'react';

class DependencyTree extends Component {
  constructor(props) {
    super(props);
    var data = props.data
    var dependencies = Object.keys(data)
    this.state = {
      collapsedDependencies: dependencies.map(() => false)
    };
  }

  createDependency(name, version) {
    return <span key={name}> {name}</span>;
  }

  createDependencies(data) {
    return Object.keys(data).map((key) => {
      return this.createDependency(key, data[key])
    });
  }

  render() {
      return (
        <div >
          {this.createDependencies(this.props.data)}
        </div>
      );
    }
  }

export default DependencyTree;
