import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func
  };

  render() {
    const { expense, onEdit } = this.props;

    return (
      <p>
        {expense.name}&nbsp;- ${expense.price}<br/>
        <button name="edit" onClick={onEdit}>Edit</button>
      </p>
    );
  }
}

export default ExpenseDisplay;