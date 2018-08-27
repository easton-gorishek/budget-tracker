import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update } from './actions';
import ExpenseDisplay from './ExpenseDisplay';
import ExpenseForm from './ExpenseForm';

class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object,
    update: PropTypes.func
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  handleComplete = (expense) => {
    const { update } = this.props;
    update(expense);
    this.handleEndEdit();
  };

  render() {
    const { expense } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing
          ? <ExpenseForm
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <ExpenseDisplay
            expense={expense}
            onEdit={this.handleEdit}
          />
        }
       
      </li>
    );
  }
}

export default connect(
  null,
  { update }
)(Expense);