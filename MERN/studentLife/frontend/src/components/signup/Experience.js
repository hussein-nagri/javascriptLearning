import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import '../../App.css'

import 'date-fns';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "female",
      email: "",
      number: "",
      address: "",
      uni: "",
      city: "",
      province: "",
      country: "",
      date: "",
      hussein: false,
      jy: false,
      ahmed: false,
      open: false,
      error: true
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onOpen = this.onOpen.bind(this);

  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onBoolChange = (e) => {
    this.setState({ [e.target.name]: !(e.target.value) })
  }

  onChangeDate = date => this.setState({ date })

  onOpen = (e) => {
    this.setState({ open: !(this.state.open) });
  }

  render() {
    return (
      <form className="container" noValidate autoComplete="off">
        <div className="row">
          <div className="col-3">
            <FormControl required component="fieldset">
              <FormLabel component="legend">Pick two</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="hussein" onChange={e => this.onChangeHandler(e)} value={this.state.hussein} />}
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={<Checkbox value={this.state.jy} name="jy" onChange={e => this.onChangeHandler(e)} />}
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Checkbox value={this.state.ahmed} name="ahmed" onChange={e => this.onChangeHandler(e)} />
                  }
                  label="Antoine Llorca"
                />
              </FormGroup>
              <FormHelperText>You can display an error</FormHelperText>
            </FormControl>
          </div>
          <div className="col-3">
            <TextField
              autoFocus
              required
              className="textfield"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="col-3">
            <TextField
              autoFocus
              required
              className="textfield"
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
            />
          </div>

        </div>
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-6">
            <TextField
              autoFocus
              required
              className="textfield"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
            />

          </div>

          < div className="col-3">
            <TextField
              autoFocus
              required
              className="textfield"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
            />
          </div>
        </div>

        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-6">
            <TextField
              autoFocus
              required
              className="textfield"
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
            />
          </div>

        </div>


        <div className="row" style={{ marginTop: "25px" }}>

          <div className="col-4">
          </div>
          <div className="col-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={Link}
              to="/registerExperience"
              fullWidth
            >Next</Button>


          </div>
        </div>
      </form >
    )
  }
}

export default Experience
