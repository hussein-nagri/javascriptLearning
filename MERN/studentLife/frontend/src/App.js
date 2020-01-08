import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/layout/HomePage';
// import Routes from './components/routing/Routes';
import './App.css';

function App() {
  useEffect(() => {
    var hello = fetch("/hi")
      .then(function (res) {
        // return res.json()
        console.log(res)
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })

    console.log(hello)
  })


  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route component={Routes} /> */}
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
