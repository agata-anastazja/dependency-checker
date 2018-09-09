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
    this.props.onSubmit(this.state.value)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Dependency:
          <input name="search" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  };
}

export default DependencyForm;
