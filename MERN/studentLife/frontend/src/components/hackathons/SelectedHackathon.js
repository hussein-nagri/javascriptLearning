import React, { Component, Fragment } from 'react'
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
      makeInterests: "",
      agreed : false,
      success : false
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCheckHandler = this.onCheckHandler.bind(this);
    this.formChange = this.formChange.bind(this);

     this.submitHandler = this.submitHandler.bind(this);
  }

  async componentDidMount(prevProps) {

    var address = window.location.href.split("/")
    address = address[address.length - 1]
    console.log(address)
    this.setState({
      pageName: address
    })

    // await axios.post(`/api/hackathons/${address}`, {
    //   address
    // }).then(data => {
    //   console.log(data)
    // })
  }


  submitHandler = async (e) => {
    e.preventDefault();
    if (!this.state.agreed){
      return alert("Please accept the terms and conditions")
    }

    var tok = localStorage.getItem("token")

    const formData = {
      interests : this.state.interests,
      teamInterests : this.state.teamInterests,
      goal : this.state.goal, 
      makeInterests : this.state.makeInterests,
      otherInt : this.state.otherInt
    }


    await axios.post("/api/hackathons/makeTeam", formData, {
      headers: {
        'Authorization': `${tok}`
      }
    })
    .then(data => {
      this.setState({
        success: true
      })
    })
    .catch(err => 
      console.log(err))

    this.state.success ? console.log("was here") : console.log("NOTTTT")

      
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
      <Fragment>
      <div style={{ marginTop: "-100px" }} className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
        <h1 className="display-4">Additional Information </h1>
        <p className="lead"></p>
      </div>
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
        </div>


        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-12 align-content-center">
            <TextField
              multiline
              rows={6}
              required
              className="textfield"
              name="makeInterests"
              value={this.state.makeInterests}
              onChange={e => this.onChangeHandler(e)}
              variant="outlined"
              label="Enter a Description of what you would like to make this hackathon"
              fullWidth
            />
          </div>
        </div>
<div>
  <Checkbox checked={this.state.agreed} 
  onChange={e => {this.setState({ agreed : !this.state.agreed})}}/>
      I accept that my information will be shared with my team
    
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
              fullWidth
            >Done</Button>


          </div>
        </div>
      </form >
      </Fragment>
    )
  }
}

export default SelectedHackathon
