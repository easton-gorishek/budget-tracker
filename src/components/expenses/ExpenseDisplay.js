import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object
  };

  render() {
    const { expense } = this.props;

    return (
      <p>
        {expense.name}
      </p>
    );
  }
}

export default ExpenseDisplay;