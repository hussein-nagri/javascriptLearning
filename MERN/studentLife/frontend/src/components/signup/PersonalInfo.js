import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import ModernDatepicker from 'react-modern-datepicker';


import Calendar from 'react-calendar'


import '../../App.css'




import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';



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
      date: "",
      error: true
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeDate = date => this.setState({ date })



  render() {

    return (


      <form className="container" noValidate autoComplete="off">
        <div className="row">

          <div className="col textfield">
            <TextField
              autoFocus
              
              required
              className="textfield"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              style={{ marginRight: "100px", marginBottom: "10px" }}
            />
          </div>
          <div className="col">
            <TextField
              autoFocus
              required
              className="textfield"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
            />
          </div>
          <div className="col">

            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender" value={this.state.gender} onChange={e => this.onChangeHandler(e)}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>

          </div>

          <ModernDatepicker
            className="fix"
            format={'DD-MM-YYYY'}
            maxDate={new Date()}
            showBorder
            date={this.state.date}
            onChange={date => this.onChangeDate(date)}
            placeholder={'Date Of Birth'}
          />


          <TextField
            autoFocus
            required
            className="textfield"
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={e => this.onChangeHandler(e)}
            variant="outlined"
            style={{ marginTop: "100px" }}

          />
          <TextField
            autoFocus
            required
            className="textfield"
            name="city"
            placeholder="City"
            value={this.state.city}
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
