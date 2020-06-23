import React from 'react';
import {Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Resepti from './resepti';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resepti" component={Resepti} />
  </Switch>
)

export default Main;
