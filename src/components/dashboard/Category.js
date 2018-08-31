import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryDisplay from './CategoryDisplay';
import CategoryForm from './CategoryForm';
import { update, remove } from './actions';
import styles from './Category.css';

class Category extends Component {
  
  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    remove: PropTypes.func
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = (category) => {
    const { update } = this.props;
    return update(category)
      .then(() => this.handleEndEdit());
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { category, remove } = this.props;
    const { editing } = this.state;

    return (
      <li className={styles.category}>
        {editing
          ? <CategoryForm
            category={category}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
            remove={remove}
          />
          : <CategoryDisplay
            category={category}
            onEdit={this.handleEdit}
          />
        }
      </li>
    );
  }
}

export default connect(
  null,
  { update, remove }
)(Category);