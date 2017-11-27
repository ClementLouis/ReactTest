import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

export class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/like">Like Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Router>
    )
  }
}
