import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Select from '@material-ui/core/Select';


import '../../App.css'

import 'date-fns';
import { Link } from 'react-router-dom';

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
      gender: "",
      email: "",
      number: "",
      address: "",
      uni: "",
      city: "",
      country: "",
      date: "",
      open: false,
      errors: false,
      errorDict: {
        "firstName": "",
        "lastName": "",
        "age": "",
        "gender": "",
        "email": "",
        "number": "",
        "address": "",
        "uni": "",
        "city": "",
        "province": "",
        "country": ""
      },
      success: false
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

  }

  onChangeHandler = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeDate = date => this.setState({ date })

  onOpen = (e) => {
    this.setState({ open: !(this.state.open) });
  }
  submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);

    const form = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      gender: this.state.gender,
      email: this.state.email,
      number: this.state.number,
      address: this.state.address,
      uni: this.state.uni,
      city: this.state.city,
      country: this.state.country
    }

    this.setState({
      errorDict: {}
    })

    let token = localStorage.getItem("token");


    await axios.post("/api/users/registerPersonal", form, {
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(res => {
        console.log("here", res);
        this.setState({
          success: true
        })
      })
      .catch(err => {
        console.error(err)
        console.log(err.response.data)
        var ers = err.response.data.errors
        var errorDict = {}
        ers.forEach(error =>
          errorDict[error.param] = error.msg
        );
        this.setState({
          errorDict
        });
      })

    this.state.success ? this.props.history.push("/registerExperience") : console.log(this.state.errors);
    console.log("Done")
    console.log(this.state.errors)


  }

  render() {

    return (


      <form className="container" method="post" onSubmit={e => this.submitHandler(e)} required noValidate autoComplete="off">
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
              error={(this.state.errorDict["firstName"] === "" || this.state.errorDict["firstName"] === undefined) ? false : true}
              helperText={this.state.errorDict["firstName"]}
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
              error={(this.state.errorDict["lastName"] === "" || this.state.errorDict["lastName"] === undefined) ? false : true}
              helperText={this.state.errorDict["lastName"]}
            />
          </div>
          <div className="col-3">
            <TextField
              autoFocus
              required
              className="textfield"
              name="age"
              placeholder="Age"
              type="number"
              value={this.state.age}
              onChange={e => { this.setState({ [e.target.name]: parseInt(e.target.value) }) }}
              variant="outlined"
              fullWidth
              error={(this.state.errorDict["age"] === "" || this.state.errorDict["age"] === undefined) ? false : true}
              helperText={this.state.errorDict["age"]}
            />
          </div>

          <div className="col-3">
            <FormControl variant="outlined" style={{
              minWidth: 120,
            }} >
              <InputLabel ref="gender" id="demo-simple-select-outlined-label">
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
              error={(this.state.errorDict["address"] === "" || this.state.errorDict["address"] === undefined) ? false : true}
              helperText={this.state.errorDict["address"]}
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
              error={(this.state.errorDict["email"] === "" || this.state.errorDict["email"] === undefined) ? false : true}
              helperText={this.state.errorDict["email"]}
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
              error={(this.state.errorDict["city"] === "" || this.state.errorDict["city"] === undefined) ? false : true}
              helperText={this.state.errorDict["city"]}
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
              error={(this.state.errorDict["number"] === "" || this.state.errorDict["number"] === undefined) ? false : true}
              helperText={this.state.errorDict["number"]}
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
              error={(this.state.errorDict["country"] === "" || this.state.errorDict["country"] === undefined) ? false : true}
              helperText={this.state.errorDict["country"]}
            />
          </div>
          <div className="col-6">
            <TextField
              autoFocus
              required
              className="textfield"
              name="uni"
              placeholder="University"
              value={this.state.uni}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              fullWidth
              error={(this.state.errorDict["uni"] === "" || this.state.errorDict["uni"] === undefined) ? false : true}
              helperText={this.state.errorDict["uni"]}
            />
          </div>
        </div>

        <div className="row" style={{ marginTop: "25px" }}>

          <div className="col-4">
          </div>
          <div className="col-4">
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              // component={Link}
              // to="/registerExperience"
              fullWidth
            >Next</Button>


          </div>
        </div>
      </form >
    )
  }
}

export default PersonalInfo
