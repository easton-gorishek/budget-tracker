import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { update, remove } from './actions';
import ExpenseDisplay from './ExpenseDisplay';
import ExpenseForm from './ExpenseForm';
import styles from './Expense.css';

class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object,
    update: PropTypes.func,
    remove: PropTypes.func
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  handleToggle = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleComplete = (expense) => {
    const { update } = this.props;
    update(expense);
    this.handleToggle();
  };

  render() {
    const { expense, remove } = this.props;
    const { editing } = this.state;

    return (
      <li className={styles.expense}>
        {editing
          ? <ExpenseForm
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleToggle}
            remove={remove}
          />
          : <ExpenseDisplay
            expense={expense}
            onEdit={this.handleToggle}
          />
        } 
      </li>
    );
  }
}

export default connect(
  null,
  { update, remove }
)(Expense);