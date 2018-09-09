import React, { Component } from 'react';
import TreeView from 'react-treeview';

class DependencyTree extends Component {
  constructor(props) {
    super();
    const package_names = Object.keys(props.data)
    this.state = {
      collapsedDependencies: package_names.map(() => true)
    };
  }

  handleClick = (i) => () => {
    let [...collapsedDependencies] = this.state.collapsedDependencies;
    collapsedDependencies[i] = !collapsedDependencies[i];
    this.setState({collapsedDependencies});
  }

  render() {
    const collapsedDependencies = this.state.collapsedDependencies;
    const data = this.props.data;
    const dataArray = Object.entries(data)
    return (
      <div >
        {dataArray.map((node, i) => {
         const label =
           <label className="node" onClick={this.handleClick(i)}>
            {node[0]}
           </label>;
           return (
             <TreeView
               key={i}
               nodeLabel={label}
               collapsed={collapsedDependencies[i]}
               onClick={this.handleClick(i)}>
                <div>{node[1]}</div>
             </TreeView>
           );
         })}
        </div>
      );
    }
  }

export default DependencyTree;
