import React, { Component } from 'react';
import { connect } from 'react-redux';
import { remove } from './actions';
import PropTypes from 'prop-types';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    remove: PropTypes.func
  };

  render() {
    const { expense, remove } = this.props;

    return (
      <p>
        {expense.name}
        <button name="delete" onClick={() => remove(expense)}>Delete</button>
      </p>
    );
  }
}

export default connect(
  null,
  { remove }
)(ExpenseDisplay);