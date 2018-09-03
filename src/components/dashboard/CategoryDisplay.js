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
        <button id="categoryEdit" name="edit" onClick={onEdit}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <p id="categoryHeader">
          <strong className="categoryHeader">{category.name}</strong> |&nbsp; 
          <strong className="categoryHeader">${category.budget}</strong>
        </p>
        <Expenses categoryId={category.id}/>
      </div>

    );
  }
}

export default CategoryDisplay;