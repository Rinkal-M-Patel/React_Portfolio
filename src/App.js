import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { About } from './components/About';
import { Resume } from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Home />
        <Switch>
        {/* <Route path="/About">
            <About />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Home">
            <Home />
          </Route> */}
        </Switch>
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
