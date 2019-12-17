import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png'
import axios from 'axios';
import { Link } from 'react-router-dom';



//MUI imports
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


const styles = (theme) => ({
  ...theme.spreadThis
})


class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      loading: false,
      errors: {}
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });

    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    }

    axios.post("/signup", newUserData)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        })
      })

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state
    return (
      <Grid container className={classes.form}>
        <Grid item sm></Grid>
        <Grid item sm>
          <img src={AppIcon} className={classes.image} alt="monkey" />
          <Typography variant="h2" className={classes.pageTitle}>
            Sign Up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField id='email'
              name='email'
              type='email'
              label='Email'
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
              fullWidth />
            <TextField id='password'
              name='password'
              type='password'
              label='Password'
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth />
            {
              errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.general}
                </Typography>
              )
            }
            <TextField id='confirmPassword'
              name='confirmPassword'
              type='password'
              label='Confirm Password'
              className={classes.textField}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              fullWidth />
            <TextField id='handle'
              name='handle'
              type='text'
              label='Handle'
              className={classes.textField}
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.handle}
              onChange={this.handleChange}
              fullWidth />
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              disabled={loading}>
              Sign Up
              {loading && (
                <CircularProgress size={30} className={classes.progress} ></CircularProgress>
              )}
            </Button>
            <br />
            <small>Already have an account? Login <Link to="/login">here</Link></small>
          </form>
        </Grid>
        <Grid item sm>

        </Grid>

      </Grid >
    )
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(signup);
