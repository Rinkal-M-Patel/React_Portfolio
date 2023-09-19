import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { About } from './components/About';
import { Resume } from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';


// Wrap the components that need access to router props with withRouter
const AboutWithRouter = withRouter(About);
const ResumeWithRouter = withRouter(Resume);
const ProjectsWithRouter = withRouter(Projects);
const ContactWithRouter = withRouter(Contact);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Home />
        <Switch>
          <Route path="/About">
            <AboutWithRouter />
          </Route>
          <Route path="/Resume">
            <ResumeWithRouter />
          </Route>
          <Route path="/Projects">
            <ProjectsWithRouter />
          </Route>
          <Route path="/Contact">
            <ContactWithRouter />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
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
