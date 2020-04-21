import React, { Component } from 'react'
import axios from 'axios'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
      teamInterests: {
        frontend: false,
        backend: false,
        fullstack: false,
        AI: false,
        blockchain: false,
        design: false,
        PM: false
      },
      goal: "",
      idea: "",

    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCheckHandler = this.onCheckHandler.bind(this);
    this.formChange = this.formChange.bind(this);

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

  formChange = async (e) => {
    e.persist();
    this.setState({
      goal: e.target.value
    });

  }

  onCheckHandler = async (e, val) => {

    var nameAttr = e.target.name.split(".")
    var input = nameAttr[0]
    var in2 = nameAttr[1]

    var newDict = [this.state[input]][0]
    newDict[in2] = !val

    console.log(input)
    await this.setState({
      [input]: newDict
    });

  }


  render() {
    return (
      <form className="container" method="post" onSubmit={e => this.submitHandler(e)} required noValidate autoComplete="off">
        <div className="row">
          <div className="col-6 text-center">
            <FormControl component="fieldset" >
              <FormLabel component="legend">Personal Interests</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.frontend} onChange={e => this.onCheckHandler(e, this.state.interests.frontend)} name="interests.frontend" />}
                  label="Frontend"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.backend} onChange={e => this.onCheckHandler(e, this.state.interests.backend)} name="interests.backend" />}
                  label="Backend"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.fullstack} onChange={e => this.onCheckHandler(e, this.state.interests.fullstack)} name="interests.fullstack" />}
                  label="Fullstack"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.blockchain} onChange={e => this.onCheckHandler(e, this.state.interests.blockchain)} name="interests.blockchain" />}
                  label="Blockchain"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.AI} onChange={e => this.onCheckHandler(e, this.state.interests.AI)} name="interests.AI" />}
                  label="AI"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.design} onChange={e => this.onCheckHandler(e, this.state.interests.design)} name="interests.design" />}
                  label="Design"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.interests.PM} onChange={e => this.onCheckHandler(e, this.state.interests.PM)} name="interests.PM" />}
                  label="PM"
                />
              </FormGroup>
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
          </div>
          <div className="col-6 text-center">
            <FormControl component="fieldset" >
              <FormLabel component="legend">Teammate Interests:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={this.state.teamInterests.frontend} onChange={e => this.onCheckHandler(e, this.state.teamInterests.frontend)} name="teamInterests.frontend" />}
                  label="Frontend"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.teamInterests.backend} onChange={e => this.onCheckHandler(e, this.state.teamInterests.backend)} name="teamInterests.backend" />}
                  label="Backend"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.teamInterests.fullstack} onChange={e => this.onCheckHandler(e, this.state.teamInterests.fullstack)} name="teamInterests.fullstack" />}
                  label="Fullstack"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.teamInterests.blockchain} onChange={e => this.onCheckHandler(e, this.state.teamInterests.blockchain)} name="teamInterests.blockchain" />}
                  label="Blockchain"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.teamInterests.AI} onChange={e => this.onCheckHandler(e, this.state.teamInterests.AI)} name="teamInterests.AI" />}
                  label="AI"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.teamInterests.design} onChange={e => this.onCheckHandler(e, this.state.teamInterests.design)} name="teamInterests.design" />}
                  label="Design"
                />
                <FormControlLabel
                  control={<Checkbox checked={this.state.teamInterests.PM} onChange={e => this.onCheckHandler(e, this.state.teamInterests.PM)} name="teamInterests.PM" />}
                  label="PM"
                />
              </FormGroup>
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
          </div>


        </div>


        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-12 text-center">
            <FormControl onChange={e => this.formChange(e)} component="fieldset">
              <FormLabel component="legend">What is this hackathon about?</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="">

                <FormControlLabel
                  value="Networking"
                  control={<Radio color="primary" />}
                  label="Networking"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="Learning"
                  control={<Radio color="primary" />}
                  label="Learning"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="Completing a project"
                  control={<Radio color="primary" />}
                  label="Completing a project"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="Winning"
                  control={<Radio color="primary" />}
                  label="Winning"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>



          </div>
          {/* <div className="col-6">
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
              label="helol"
            />
          </div> */}
        </div>


        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-6">
            <TextField
              multiline
              rows={6}
              autoFocus
              required
              className="textfield"
              name="address"
              value={this.state.address}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              label="Enter a Description of what you would like to make this hackathon"
              fullWidth
            />
          </div>

          <div className="col-6">
            <TextField
              multiline
              rows={6}
              autoFocus
              required
              className="textfield"
              name="address"
              value={this.state.address}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              label="Enter a Description of what you would like to make this hackathon"
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
