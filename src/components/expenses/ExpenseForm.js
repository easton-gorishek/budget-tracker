import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    id: null,
    name: '',
    price: ''
  };

  static propTypes = {
    expense: PropTypes.object,
    categoryId: PropTypes.string,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;
    this.setState(expense); 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { id, name, price } = this.state;
    const expense = { name, price };
    if(id) expense.id = id;
    if(this.props.categoryId) expense.categoryId = this.props.categoryId;

    this.props.onComplete(expense);
    this.setState({ name: '', price: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, price, id } = this.state;
    const { onCancel } = this.props;


    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Expense Name:&nbsp;<br/>
          <input required name="name" value={name} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
        Price:&nbsp;<br/>
          <input required name="price" value={price} onChange={this.handleChange}/>
        </label>
        <p>
          <button type="submit">{id ? 'Update' : 'Add' }</button>
          {id && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

export default ExpenseForm;