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
      <p className={styles.expenseDisplay}>
        <span>{expense.name}&nbsp;- ${expense.price}</span>
        <button name="edit" onClick={onEdit}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </p>
    );
  }
}

export default ExpenseDisplay;