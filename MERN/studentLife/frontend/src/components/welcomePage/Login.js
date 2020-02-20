import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as ReactLink } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../layout/Dashboard';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");


  const handleUsername = (e) => {
    setuserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.persist();
    e.preventDefault();
    const userData = {
      email: userName,
      password
    }

    await axios.post("/api/users/login", userData)
      .then(res => {
        return res.data;
      })
      .then(response => {
        if (response.msg == "success") {
          //This redirect statement is not working. why?
          // return (<Redirect to="/home" />);

          localStorage.setItem("token", response.token);
          props.history.push("/home");
        }

      })
      .catch(err => {
        console.error(err);
        alert(err.response.data.errors)
      })
    console.log(e);
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={userName}
            onChange={e => handleUsername(e)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={e => handlePassword(e)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => handleSubmit(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid >
              <div>
                Don't have an account? <ReactLink to="/"> Sign Up </ReactLink>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}

//use this to create private routes 
// {
//   headers: { Authorization: "Bearer " + localStorage.getItem("token") }
// }