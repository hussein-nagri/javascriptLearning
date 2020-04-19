import React, { Component } from 'react'
import axios from 'axios'



import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

class SelectedHackathon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hackathons: [],
      pageName: "",
      interests: {
        frontend: false,
        backend: false,
        fullstack: false,
        AI: false,
        blockchain: false,
        design: false,
        PM: false
      },
      teamInterests: []
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCheckHandler = this.onCheckHandler.bind(this);

    //  this.renderTeam = this.renderTeam.bind(this);
  }

  async componentDidMount(prevProps) {

    var address = window.location.href.split("/")
    address = address[address.length - 1]
    console.log(address)
    this.setState({
      pageName: address
    })

    await axios.post(`/api/hackathons/${address}`, {
      address
    }).then(data => {
      console.log(data)
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onCheckHandler = (e) => {

    var nameAttr = e.target.name.split(".")

    var input = nameAttr[0] + "[" + [nameAttr[1]] + "]"


    var name = this.state[nameAttr[0]][nameAttr[1]];

    console.log(name, " ere", input)



    this.setState(prevState => ({
      [nameAttr[0][`${nameAttr[1]}`]]: true
    }));

    console.log(this.state[e.target.name])
    console.log("My name is: ", e.target.name)

    console.log(e.target.value)

  }


  render() {
    return (
      <form className="container" method="post" onSubmit={e => this.submitHandler(e)} required noValidate autoComplete="off">
        <div className="row">
          <div className="col-3">

            <FormControl component="fieldset" >
              <FormLabel component="legend">Personal Interests</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.frontend} onChange={e => this.onCheckHandler(e)} name="interests.frontend" />}
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={<Checkbox checked={true} onChange={e => this.onChangeHandler(e)} name="jason" />}
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={<Checkbox checked={true} onChange={e => this.onChangeHandler(e)} name="antoine" />}
                  label="Antoine Llorca"
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          </div>
          <div className="col-3">
            <FormControl component="fieldset" >
              <FormLabel component="legend">Team Mate Interests</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={true} onChange={e => this.onChangeHandler(e)} name="gilad" />}
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={<Checkbox checked={true} onChange={e => this.onChangeHandler(e)} name="jason" />}
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={<Checkbox checked={true} onChange={e => this.onChangeHandler(e)} name="antoine" />}
                  label="Antoine Llorca"
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
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
              placeholder="University"
              value={this.state.uni}
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

export default SelectedHackathon
