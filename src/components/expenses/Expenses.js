import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { getExpenses } from './reducers';
import Expense from './Expense';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string
  };

  render() {
    const { expenses } = this.props;
    return (
      <ul>
        {expenses.map(expense => (
          <Expense
            key={expense.id}
            expense={expense}
          />
        ))}
      </ul>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpenses(state, categoryId)
  }),
  null
)(Expenses);