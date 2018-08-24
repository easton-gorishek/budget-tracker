import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import styles from './Categories.css';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array
  };

  render() {
    const { categories } = this.props;

    return (
      <ul className={styles.categories}>
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
          />
        ))}
      </ul>
    );
  }
}

export default Categories;