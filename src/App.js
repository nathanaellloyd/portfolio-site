import React from 'react';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar'; 
import Contact from './Components/Contact'; 
import Work from './Components/Work'; 
import About from './Components/About'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Success from './Components/Success';


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
          <Route exact path="/aboutme">
              <About /> 
          </Route> 
          <Route exact path="/work">
              <Work /> 
          </Route> 
          <Route exact path="/success">
              <Success /> 
          </Route> 
      </Switch>
      </div>
    </Router>
  );
}

export default App;
