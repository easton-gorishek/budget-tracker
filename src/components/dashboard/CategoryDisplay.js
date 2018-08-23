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
        <p>
          <strong>Category:</strong> {category.name}<br/>
          <strong>Budget:</strong> {category.budget}
        </p>
      </Fragment>
    );
  }
}

export default CategoryDisplay;