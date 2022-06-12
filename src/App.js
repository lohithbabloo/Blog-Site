import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  return (
    <Router>

      <Navbar />

      <div className="content">
        <Switch>
          <Router exact path='/'>
            <Home />
          </Router>
          <Router  path='/Create'>
            <Create />
          </Router>
          <Router path='/blogs' >
            <BlogDetails />
          </Router>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
