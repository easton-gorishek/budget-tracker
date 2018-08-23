import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryDisplay extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired
  };

  render() {
    const { category } = this.props;

    return (
      <p>
        {category.name}
      </p>
    );
  }
}

export default CategoryDisplay;