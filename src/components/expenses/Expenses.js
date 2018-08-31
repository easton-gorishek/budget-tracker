import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { getExpensesByCategoryId, getTotalExpenses } from './reducers';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { add } from './actions';
import styles from './Expenses.css';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    totalExpenses: PropTypes.number,
    categoryId: PropTypes.string,
    add: PropTypes.func,
    load: PropTypes.func
  };

  render() {
    const { expenses, totalExpenses, categoryId, add } = this.props;
    return (
      <Fragment>
        <ul className={styles.expenses}>
          {expenses.map(expense => (
            <Expense
              key={expense.id}
              expense={expense}
            />
          ))}
          <p>
            <span id="total"><strong>TOTAL</strong></span>
            <span><strong>${totalExpenses}</strong></span>
          </p>
        </ul>
        <ExpenseForm 
          categoryId={categoryId}
          onComplete={add}
        />
      </Fragment>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId),
    totalExpenses: getTotalExpenses(state, categoryId)
  }),
  { add } 
)(Expenses);