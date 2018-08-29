import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseForm.css';

class ExpenseForm extends Component {

  state = {
    id: null,
    categoryId: '',
    name: '',
    price: '',
    timestamp: ''
  };

  static propTypes = {
    expense: PropTypes.object,
    categoryId: PropTypes.string,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    remove: PropTypes.func
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;
    this.setState(expense);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { id, name, price, categoryId } = this.state;
    const expense = { name, price, categoryId };
    if(id) expense.id = id;
    if(this.props.categoryId) expense.categoryId = this.props.categoryId;

    this.props.onComplete(expense);
    this.setState({ name: '', price: '' });
    document.activeElement.blur();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onRemove = (event) => {
    event.preventDefault();
    const { expense, remove } = this.props;
    remove(expense);
  };

  render() {
    const { name, price, id } = this.state;
    const { onCancel } = this.props;


    return (
      <form className={styles.expenseForm} onSubmit={this.handleSubmit}>
        <label>
        Expense:&nbsp;<br/>
          <input required name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
        Amount:&nbsp;<br/>
          <input required name="price" value={price} onChange={this.handleChange}/>
        </label>
        <p>
          <button type="submit">{id ? 'Update' : 'Add' }</button>
          {id && 
            <Fragment>
              <button type="button" onClick={onCancel}>Cancel</button>
              <button name="remove" onClick={this.onRemove}>Delete</button>
            </Fragment>
          }
        </p>
      </form>
    );
  }
}

export default ExpenseForm;