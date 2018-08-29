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
        <p id="categoryHeader">
          <strong>{category.name}</strong> |&nbsp; 
          <strong>${category.budget}</strong>
        </p>
        <Expenses categoryId={category.id}/>
      </div>

    );
  }
}

export default CategoryDisplay;