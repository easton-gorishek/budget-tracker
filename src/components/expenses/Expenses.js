import React, { Component } from 'react';
import load from '../dashboard/actions';
import Expense from './Expense';

class Expenses extends Component {
  
  static propTypes = {
    load: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() {

    return (
      <h1>expenses</h1>
    );
  }

}