import React, { Component } from 'react';
// import TreeView from '../src/react-treeview';

var data = [];

class DependencyTree extends Component {


  constructor(props) {
    super(props);
    console.log(this.props.data)
    data = JSON.parse(this.props.data)
    // var dependencies = Object.keys(data)
    // this.state = {
    //   collapsedDependencies: dependencies.map(() => false)
    // };
  }


  // This example data format is totally arbitrary. No data massaging is
  // required and you use regular js in `render` to iterate through and
  // construct your nodes.
  // dataSource = [
  //   ['Apple', 'Orange'],
  //   ['Facebook', 'Google'],
  //   ['Celery', 'Cheeseburger'],
  // ];

  // A controlled TreeView, akin to React's controlled inputs
  // (http://facebook.github.io/react/docs/forms.html#controlled-components), has
  // many benefits. Among others, you can expand/collapse everything (i.e. easily
  // trigger those somewhere else).

    //
    // handleClick(i) {
    //   let [...collapsedDependencies] = this.state.collapsedDependencies;
    //   collapsedDependencies[i] = !collapsedDependencies[i];
    //   this.setState({collapsedDependencies: collapsedDependencies});
    // }
    //
    // collapseAll() {
    //   this.setState({
    //     collapsedDependencies: this.state.collapsedDependencies.map(() => true),
    //   });
    // }

    render() {
      //const collapsedDependencies = this.state.collapsedDependencies;
      return (
        <div>
          {
            Object.keys(data).forEach(function(key) {
              return(
                <span>
                  {key + data[key]}
                </span>
              )
            })
          }
        </div>
      );
    }
  }

export default DependencyTree;
// {dataSource.map((node, i) => {
//   const label =
//     <span className="node" onClick={this.handleClick.bind(null, i)}>
//       Type {i}
//     </span>;
//   return (
//     <TreeView
//       key={i}
//       nodeLabel={label}
//       collapsed={collapsedDependencies[i]}
//       onClick={this.handleClick.bind(null, i)}>
//       {node.map(entry => <div className="info" key={entry}>{entry}</div>)}
//     </TreeView>
//   );
// })}
