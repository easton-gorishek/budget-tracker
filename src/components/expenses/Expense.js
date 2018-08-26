import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseDisplay from './ExpenseDisplay';

class Expense extends Component {

  static propTypes = {
    expense: PropTypes.object
  };

  render() {
    const { expense } = this.props;

    return (
      <li>
        <ExpenseDisplay
          expense={expense}
        />
      </li>
    );
  }
}

export default Expense;