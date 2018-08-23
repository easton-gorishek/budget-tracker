import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CategoryDisplay extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired
  };

  render() {
    const { category } = this.props;

    return (
      <Fragment>
        <p><strong>Category:</strong><br/>{category.name}</p>
        <p><strong>Budget:</strong><br/> {category.budget}</p>
      </Fragment>
    );
  }
}

export default CategoryDisplay;