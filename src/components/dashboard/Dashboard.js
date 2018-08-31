import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { load, add } from './actions';
import { getCategories } from './reducers';
import styles from './Dashboard.css';

class Dashboard extends Component {

  state = {
    toggle: false
  };

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  handleToggle = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  render() {
    const { toggle } = this.state;
    const { add, categories } = this.props;

    return (
      <div className={styles.dashboard}>
        <section id="addCategory">
          { toggle 
            ? <CategoryForm 
              onComplete={add}
              onToggle={this.handleToggle}
            /> 
            : <button id="addCategoryButton" onClick={this.handleToggle}>Add a category <i className="fas fa-plus"></i></button>
          }
        </section>

        {categories &&
          <section>
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
    categories: getCategories(state)
  }),
  { load, add }
)(Dashboard);