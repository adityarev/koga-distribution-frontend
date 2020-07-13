import React from "react";
import PropTypes from 'prop-types';

import "./index.css";

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || 0
    };
  }

  handleValueChange = (newValue) => {
    this.setState({
      value: Math.max(0, newValue)
    }, () => {
      if (typeof(this.props.onChange) !== 'undefined') {
        this.props.onChange(this.state.value);
      }
    });
  }

  handleDecrease = (event) => {
    event.preventDefault();
    this.handleValueChange(this.state.value - 1);
  }

  handleIncrease = (event) => {
    event.preventDefault();
    this.handleValueChange(this.state.value + 1);
  }

  handleOnChange = (event) => {
    const { value } = event.target;
    this.handleValueChange(Number(value === "" ? "0" : value));
  }

  render() {
    return (
      <div className="def-number-input number-input">
        <button onClick={this.handleDecrease} className="minus"></button>
        <input
          type="number" className="quantity" name="quantity"
          value={this.state.value} onChange={this.handleOnChange}
        />
        <button onClick={this.handleIncrease} className="plus"></button>
      </div>
    );
  }
}

InputNumber.propTypes = {
  defaultValue: PropTypes.number,
  onChange: PropTypes.func
}

export default InputNumber;
