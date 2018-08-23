import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    id: null,
    timestamp: '',
    name: '',
    budget: ''
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;

    this.setState(category);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, budget, timestamp, id } = this.state;
    const category = { name, budget, timestamp };
    if(id) category.id = id;

    this.props.onComplete(category);
    this.setState({ name: '', budget: '', timestamp: '' })
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, name, budget } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Category Name:
          <input name="name" value={name} onChange={this.handleChange}/>
          <input name="budget" value={budget} onChange={this.handleChange}/>
          <button type="submit">{id ? 'Update' : 'Add' }</button>
        </label>
      </form>
    );
  }
}

export default CategoryForm;