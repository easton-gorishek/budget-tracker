import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import styles from './CategoryDisplay.css';
import Expenses from '../expenses/Expenses';

class CategoryDisplay extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    load: PropTypes.func
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <Fragment>
        <p className={styles.categoryDisplay}>
          <strong>{category.name}</strong><br/>
          <strong>${category.budget}</strong><br/>
          <button name="edit" onClick={onEdit}>Edit</button>
          <button name="delete" onClick={() => remove(category.id)}>Delete</button>
        </p>
        <Expenses categoryId={category.id}/>
      </Fragment>

    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryDisplay);