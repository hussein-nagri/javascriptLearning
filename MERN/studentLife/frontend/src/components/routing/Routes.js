import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../layout/Dashboard';
import Hackathons from '../layout/Hackathons';
import SignedInNav from '../layout/SignedInNav';
import { Fragment } from 'react';

const Routes = () => {
  return (
    <Fragment>
      <SignedInNav />
      <section className='container'>
        <Switch>
          <Route exact path='/home' component={Dashboard} />
          <Route exact path='/hackathons' component={Hackathons} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default Routes;
