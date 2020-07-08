import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./index.css";

class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.deafultValue || 0
    };
  }

  handleDecrease = (event) => {
    this.setState({ value: this.state.value - 1 });
  }

  handleIncrease = (event) => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
        <div className="def-number-input number-input">
          <button onClick={this.handleDecrease} className="minus"></button>
          <input
            type="number" className="quantity" name="quantity"
            value={this.state.value} onChange={this.props.onChange}
          />
          <button onClick={this.handleIncrease} className="plus"></button>
        </div>
      );
  }
}

InputNumber.defaultProps = {
  deafultValue: PropTypes.number,
  onChange: PropTypes.func,
}

export default InputNumber;
