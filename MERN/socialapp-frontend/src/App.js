import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme'
import jwtDecode from 'jwt-decode'


//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store'

//Components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute'
//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = `/login`;
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home}></Route>
              <AuthRoute exact path="/login" component={login} authenticated={authenticated}></AuthRoute>
              <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}></AuthRoute>
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
