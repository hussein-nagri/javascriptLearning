import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../layout/Dashboard';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/home' component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
