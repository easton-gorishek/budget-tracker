import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import categories from '../../services/categories-data';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { load, add } from './actions';


class Dashboard extends Component {

  static propTypes = {
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { add } = this.props;

    return (
      <div>
        <section>
          <h2>Dashboard</h2>
          <CategoryForm onComplete={add}/>
        </section>

        {categories &&
          <section>
            <h3>Budget Categories</h3>
            <Categories
              categories={categories}
            />
          </section>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state
  }),
  { load, add }
)(Dashboard);