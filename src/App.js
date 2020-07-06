import React from 'react';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar'; 
import { BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <div className="whole-body">
          <NavBar />
          <Hero />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
