import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <h1>Budget Tracker</h1>
        <nav>
          <ul>
            <li>
              <span><NavLink exact activeClassName="active" to="/">Home</NavLink></span>&nbsp;
              <span><NavLink exact activeClassName="active" to="/dashboard">Budget</NavLink></span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;