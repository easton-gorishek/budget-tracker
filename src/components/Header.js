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
              <NavLink exact className="inactive" activeClassName="active" to="/">Home</NavLink>&nbsp;
              <span>| </span>
              <NavLink exact className="inactive" activeClassName="active" to="/dashboard">Budget</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;