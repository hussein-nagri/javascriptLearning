import React, { Component, createRef } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Select from '@material-ui/core/Select';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import '../../App.css'


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

class MainProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      email: "",
      number: "",
      uni: "",
      password: "",
      open: false,
      errors: false,
      errorDict: {
        "name": "",
        "age": "",
        "gender": "",
        "email": "",
        "number": "",
        "address": "",
        "uni": "",

      },
      success: false,
      file: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.imageChange = this.imageChange.bind(this);

    this.fileInput = React.createRef();

  }

  onChangeHandler = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  imageChange = (e) => {

    let file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.setState({
        file: reader.result
      });
    };

  }

  onChangeDate = date => this.setState({ date })

  onOpen = (e) => {
    this.setState({ open: !(this.state.open) });
  }
  submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);

    const form = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password,
      uni: this.state.uni,
      number: this.state.number,
      file: this.state.file
    }


    let token = localStorage.getItem("token");


    await axios.post("/api/users/updateProfile", form, {
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(res => {
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

    this.state.success ? this.props.history.push("/home") : console.log(this.state.errors);
  }
  async componentDidMount() {

    var token = localStorage.getItem("token");
    await axios.get("/api/users/getDetails", {
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(res => {
        const { name, email, age, number, uni } = res.data.user
        this.setState({
          name,
          email,
          age,
          number,
          uni
        })
      })
  }
  render() {
    return (
      <div>
        {
          this.state.name ? (
            <form className="container" method="post" onSubmit={e => this.submitHandler(e)} required noValidate autoComplete="off">
              <div className="row">
                <div className="col-4">
                  <TextField
                    autoFocus
                    required
                    className="textfield"
                    label="Name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.onChangeHandler(e)}
                    variant="outlined"
                    fullWidth
                    error={(this.state.errorDict["name"] === "" || this.state.errorDict["name"] === undefined) ? false : true}
                    helperText={this.state.errorDict["name"]}
                  />
                </div>
                <div className="col-4">
                  <TextField
                    autoFocus
                    required
                    className="textfield"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    label="Email"
                    onChange={e => this.onChangeHandler(e)}
                    variant="outlined"
                    fullWidth
                    error={(this.state.errorDict["email"] === "" || this.state.errorDict["email"] === undefined) ? false : true}
                    helperText={this.state.errorDict["email"]}
                  />
                </div>
                <div className="col-4">
                  <TextField
                    autoFocus
                    required
                    className="textfield"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    label="Password"
                    onChange={e => this.onChangeHandler(e)}
                    variant="outlined"
                    fullWidth
                    error={(this.state.errorDict["password"] === "" || this.state.errorDict["password"] === undefined) ? false : true}
                    helperText={this.state.errorDict["password"]}
                  />
                </div>


              </div>


              <div className="row" style={{ marginTop: "25px" }}>
                <div className="col-4">

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
                    label="Phone Number"
                    error={(this.state.errorDict["number"] === "" || this.state.errorDict["number"] === undefined) ? false : true}
                    helperText={this.state.errorDict["number"]}
                  />

                </div>
                <div className="col-4">
                  <TextField
                    autoFocus
                    required
                    className="textfield"
                    label="University"
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
                <div className="col-4">
                  <TextField
                    autoFocus
                    required
                    label="Age"
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
              </div>

              <div className="row" style={{ marginTop: "25px" }}>
                <div className="col-4">
                  Add cover photo:
                  <input onChange={e => this.imageChange(e)} ref={this.fileInput} accept="image/*" style={{ display: "none" }} id="icon-button-file" type="file" />
                  <label htmlFor="icon-button-file">
                    <Button color="primary" aria-label="upload picture" component="span">
                      <AddAPhotoIcon />
                    </Button>
                  </label>
                </div>
                <div className="col-4">
                  {
                    this.state.file !== null ? (
                      <img
                        style={{
                          objectFit: "contain",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "200px",
                          height: "200px"
                        }} src={this.state.file} />
                    ) : (null)
                  }
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
          ) : (null)
        }
      </div>
    )
  }
}

export default MainProfile
