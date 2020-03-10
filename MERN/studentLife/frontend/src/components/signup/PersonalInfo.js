import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import ModernDatepicker from 'react-modern-datepicker';


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
import Select from '@material-ui/core/Select';
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
      gender: "female",
      address: "",
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


          {/* <div className="col-3">
            <ModernDatepicker
              className="fix"
              format={'DD-MM-YYYY'}
              maxDate={new Date()}
              showBorder
              date={this.state.date}
              onChange={date => this.onChangeDate(date)}
              placeholder={'Date Of Birth'}
            />
          </div>
          <div className="col-2">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender" value={this.state.gender} onChange={e => this.onChangeHandler(e)}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </div> */}

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


          <div className="col-6">
            <div className="col-12">



              <FormControl className="col-12">
                <InputLabel id="demo-controlled-open-select-label">Province</InputLabel>

                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={this.state.open}
                  onClose={this.onOpen}
                  onOpen={this.onOpen}
                  value={this.state.province}
                  onChange={this.onChangeHandler}
                  name="province"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"British Columbia"}>British Columbia</MenuItem>
                  <MenuItem value={"Alberta"}>Alberta</MenuItem>
                  <MenuItem value={"Saskatchewan"}>Saskatchewan</MenuItem>
                  <MenuItem value={"Manitoba"}>Manitoba</MenuItem>
                  <MenuItem value={"Ontario"}>Ontario</MenuItem>
                  <MenuItem value={"Quebec"}>Quebec</MenuItem>
                  <MenuItem value={"Newfoundland"}>Newfoundland</MenuItem>
                  <MenuItem value={"New Brunswick"}>New Brunswick</MenuItem>
                  <MenuItem value={"Nova Scotia"}>Nova Scotia</MenuItem>
                  <MenuItem value={"PEI"}>PEI</MenuItem>
                  <MenuItem value={"Yukon"}>Yukon</MenuItem>
                  <MenuItem value={"NWT"}>NWT</MenuItem>
                  <MenuItem value={"Nunavut"}>Nunavut</MenuItem>
                </Select>
              </FormControl>



            </div>
          </div>



          <TextField
            autoFocus
            required
            className="textfield"
            name="country"
            placeholder="Country"
            value={this.state.country}
            onChange={e => this.onChangeHandler(e)}
            variant="outlined"
            style={{ marginTop: "100px", marginLeft: "100px" }}

          />

          <TextField
            autoFocus
            required
            className="textfield"
            name="country"
            placeholder="Please enter the name of a language that you know"
            onChange={e => this.onChangeHandler(e)}
            variant="outlined"
            style={{ marginTop: "100px", marginLeft: "100px" }}

          />

        </div>

      </form >
    )
  }
}

export default PersonalInfo
