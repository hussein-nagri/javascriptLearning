import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css';
import Navbar from './components/layouts/Navbar'
import Landing from './components/layouts/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

//Redux
import { Provider } from 'react-redux' //combines react and redux
import store from './store'

const App = () => (
  //must wrap it all
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar></Navbar>
        <Route exact path="/" component={Landing}> </Route>
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>


          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
