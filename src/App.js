import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/navbar';
import {Home} from './components/home';
import {About} from './components/about';
import {Like} from './components/like';
import {HashRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <div>
  <Navbar/>
</div>, document.getElementById('react-nav'));

ReactDOM.render(
  <div>
 
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/like" component={Like}/>
    </div>
  </Router>
</div>, document.getElementById('react-container'))
