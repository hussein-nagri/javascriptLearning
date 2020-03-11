import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import ModernDatepicker from 'react-modern-datepicker';


import Select from '@material-ui/core/Select';



import DropdownButton from 'react-bootstrap/DropdownButton'
import Calendar from 'react-calendar'


import '../../App.css'



import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

class PersonalInfo extends Component {

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

  onChangeDate = date => this.setState({ date })

  onOpen = (e) => {
    this.setState({ open: !(this.state.open) });
  }


  render() {

    return (


      <form className="container" noValidate autoComplete="off">
        <div className="row">

          <div className="col-3">
            <TextField
              autoFocus
              required
              className="textfield"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
            />
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

          <div className="col-3">
            <FormControl variant="outlined" style={{
              minWidth: 120,
            }} >
              <InputLabel ref="age" id="demo-simple-select-outlined-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.gender}
                onChange={e => this.onChangeHandler(e)}
                name="gender"
              >
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
              </Select>
            </FormControl>


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
          <div className="col-3">
            <TextField
              autoFocus
              required
              className="textfield"
              name="number"
              placeholder="Phone Number"
              value={this.state.number}
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
              name="country"
              placeholder="Country"
              value={this.state.country}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="col-6">
            <TextField
              autoFocus
              required
              className="textfield"
              name="uni"
              placeholder="Univerisity"
              value={this.state.uni}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
            />
          </div>
        </div>
      </form >
    )
  }
}

export default PersonalInfo
