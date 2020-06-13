import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import TourList from './components/TourList/tourlist';
import Jointeam from './components/JoinTeam/Jointeam';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {

    return (
      <Router>

        
          <Route path="/" exact>

            <Navbar />
            <TourList />
            <About />
            <Jointeam />
          </Route>
          <Route path="/contact" exact>

            <Contact />

          </Route>
        

      </Router>

    );
  }
}
export default App;
