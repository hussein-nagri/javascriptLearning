import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../layout/Dashboard';
import Hackathons from '../layout/Hackathons';
import SignedInNav from '../layout/SignedInNav';
import { Fragment } from 'react';
import { PrivateRoute } from './PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <SignedInNav />
      <section className='container'>
        <Switch>
          <PrivateRoute exact path='/home' component={Dashboard} />
          <PrivateRoute exact path='/hackathons' component={Hackathons} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default Routes;


//need to create a logout function that removes token from local storage