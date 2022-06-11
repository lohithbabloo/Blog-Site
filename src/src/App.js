import React  from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

function App() {

  return (
    <Router>

      <Navbar />

      <div className="content">
        <Switch>
          <Router exact path='/'>
            <Home />
          </Router>
          <Router path='/Create'>
            <Create />
          </Router>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
