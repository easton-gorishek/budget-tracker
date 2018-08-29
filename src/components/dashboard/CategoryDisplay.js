import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryDisplay.css';
import Expenses from '../expenses/Expenses';

class CategoryDisplay extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  render() {
    const { category, onEdit } = this.props;

    return (
      <div className={styles.categoryDisplay}>
        <button id="categoryEdit" name="edit" onClick={onEdit}>&#9998;</button>
        <p>
          <strong>{category.name}</strong><br/>
          <strong>${category.budget}</strong><br/>
        </p>
        <Expenses categoryId={category.id}/>
      </div>

    );
  }
}

export default CategoryDisplay;