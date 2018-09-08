import React, { Component } from 'react';

class DependencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) =>  {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="search" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
}

export default DependencyForm;
