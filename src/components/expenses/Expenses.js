import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { getExpensesByCategoryId } from './reducers';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { add } from './actions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    add: PropTypes.func
  };

  render() {
    const { expenses, categoryId, add } = this.props;
    return (
      <Fragment>
        <ul>
          {expenses.map(expense => (
            <Expense
              key={expense.id}
              expense={expense}
            />
          ))}
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
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { add }
)(Expenses);