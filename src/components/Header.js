import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div>
        <h1>Budget Tracker</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/dashboard">Budget</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;