import React, { Component } from 'react';
import './display.scss';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(props) {
    console.log('props', props.value);
    this.setState({ value: props.value });
  }

  render() {
    console.log('prop', this.props.value);
    return (
      <div className="display">
        <input type="text" value={this.props.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Display;
