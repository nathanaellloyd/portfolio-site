import React from 'react';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar'; 
import Contact from './Components/Contact'; 
import Music from './Components/Music'; 
import Work from './Components/Work'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="whole-body">
        <NavBar />
        <Switch>
          <Route exact path="/">
              <Hero />
          </Route>
          <Route exact path="/contact">
              <Contact /> 
          </Route> 
          <Route exact path="/music">
              <Music /> 
          </Route> 
          <Route exact path="/work">
              <Work /> 
          </Route> 
      </Switch>
      </div>
    </Router>
  );
}

export default App;
