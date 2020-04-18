import React, { Component } from 'react'
import axios from 'axios'



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
      pageName: ""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);

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


  render() {
    return (
      <form className="container" method="post" onSubmit={e => this.submitHandler(e)} required noValidate autoComplete="off">
        <div className="row">
          <div className="col-3">
            Select what you plan on working on this hackathon --> Implement a select component to choose focus/interest areas
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
