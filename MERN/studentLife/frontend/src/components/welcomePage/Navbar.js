import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Navbar extends Component {

  render() {
    return (

      <AppBar position="fixed">
        <Toolbar>

          <Typography variant="h6" style={{ flexGrow: 1 }}>
            StudentLife
          </Typography>

          <Button>
            <a style={{ color: 'white' }} href="#about">About</a>
          </Button>
          <Button color="default">
            <a style={{ color: 'white' }} href="#services">Features</a>
          </Button>

          <Button color="default">
            <a style={{ color: 'white' }} href="#signup">Sign Up</a>
          </Button>
          <Button color="default"><Link style={{ color: 'white' }} to='/login'>Login</Link> </Button>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar >

    )
  }
}

export default Navbar
