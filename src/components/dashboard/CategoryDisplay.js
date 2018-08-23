import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CategoryDisplay extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  render() {
    const { category, onEdit } = this.props;

    return (
      <Fragment>
        <p>
          <strong>Category:</strong> {category.name}<br/>
          <strong>Budget:</strong> ${category.budget}<br/>
          <button name="edit" onClick={onEdit}>Edit</button>
        </p>
      </Fragment>
    );
  }
}

export default CategoryDisplay;