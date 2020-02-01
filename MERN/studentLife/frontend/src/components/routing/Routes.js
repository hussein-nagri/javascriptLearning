import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../layout/Dashboard';
import Hackathons from '../layout/Hackathons';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/home' component={Dashboard} />
        <Route exact path='/hackathons' component={Hackathons} />
      </Switch>
    </section>
  );
};

export default Routes;
