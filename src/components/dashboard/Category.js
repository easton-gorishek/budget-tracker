import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryDisplay from './CategoryDisplay';

class Category extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired
  };

  render() {
    const { category } = this.props;

    return (
      <li>
        <CategoryDisplay
          category={category}
        />
      </li>
    );
  }
}

export default Category;