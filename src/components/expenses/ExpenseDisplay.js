import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseDisplay.css';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func
  };

  render() {
    const { expense, onEdit } = this.props;

    return (
      <p id="expense" className={styles.expenseDisplay}>
        <span id="section"  onClick={onEdit}>{expense.name}</span>
        <span id="amount">${expense.price}</span>
      </p>
    );
  }
}

export default ExpenseDisplay;