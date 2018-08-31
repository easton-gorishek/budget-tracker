import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';

class CategoryForm extends Component {

  state = {
    id: null,
    name: '',
    budget: ''
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    remove: PropTypes.func,
    onToggle: PropTypes.func
  };

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;

    this.setState(category);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, budget, timestamp, id } = this.state;
    const category = { name, budget, timestamp };
    if(id) category.id = id;

    const { onComplete, category: originalCategory } = this.props;

    onComplete(category)
      .then(() => {
        if(!originalCategory) {
          this.setState({ name: '', budget: '' });
          this.props.onToggle();
          document.activeElement.blur();
        }
      })
      .catch(err => {
        this.setState({ errors: err });
      });

    // this.setState({ name: '', budget: '', timestamp: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onRemove = (event) => {
    event.preventDefault();
    const { remove, category } = this.props;
    remove(category.id);
  };

  render() {
    const { id, name, budget } = this.state;
    const { onCancel, onToggle } = this.props;

    return (
      <form className={styles.categoryForm} onSubmit={this.handleSubmit}>
        <label>
          Category:&nbsp;<br/>
          <input required name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
          Budget:&nbsp;<br/>
          <input required name="budget" value={budget} onChange={this.handleChange}/>
        </label>
        <p>
          <button type="submit">
            {id 
              ? <i className="fas fa-check">
              </i> 
              : <i className="fas fa-check"></i>
            }
          </button>
          {!id && <button type="button" onClick={onToggle}><i className="fas fa-times"></i></button>}
          {id && 
            <Fragment>
              <button type="button" onClick={onCancel}>
                <i className="fas fa-times"></i>
              </button>
              <button name="remove" onClick={this.onRemove}>
                <i className="far fa-trash-alt"></i>
              </button>
            </Fragment>
          }
        </p>
      </form>
    );
  }
}

export default CategoryForm;