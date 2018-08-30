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
      <section className={styles.expenseDisplay}>
        <p id="section"  onClick={onEdit}>{expense.name}</p>
        <p id="amount">${expense.price}</p>
      </section>
    );
  }
}

export default ExpenseDisplay;