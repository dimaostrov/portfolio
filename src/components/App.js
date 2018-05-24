import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import HomePage from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from './About'

import * as routes from "../constants/routes";
import Tachyons from "tachyons";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.PORTFOLIO} component={() => <Portfolio />} />
      <Route exact path={routes.CONTACT} component={() => <Contact />} />  
      <Route exact path={routes.ABOUT} component={() => <About />} />
    </div>
  </Router>
);


export default App;
