import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

class CategoryDisplay extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <Fragment>
        <p>
          <strong>Category:</strong> {category.name}<br/>
          <strong>Budget:</strong> ${category.budget}<br/>
          <button name="edit" onClick={onEdit}>Edit</button>
          <button name="delete" onClick={() => remove(category.id)}>Delete</button>
        </p>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryDisplay);