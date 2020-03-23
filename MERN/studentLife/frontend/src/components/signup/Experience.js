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

import Languages from './Languages'


export class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: ["Python", "C/C++", "Java", "React", "HTML/CSS", "Swift", "Django", "Flask", "Nodejs/Express", "Kotlin", "SQL/MYSQL", "AWS", "GCP", "GO", "Javascript", "Ruby", "R", "Postgres", "MongoDB"],
      Python: "",
      ["C/C++"]: "",
      Java: "",
      React: "",
      ["HTML/CSS"]: "",
      Swift: "",
      Django: "",
      Flask: "",
      ["Nodejs/Express"]: "",
      Kotlin: "",
      ["SQL/MYSQL"]: "",
      AWS: "",
      GCP: "",
      GO: "",
      Javascript: "",
      Ruby: "",
      R: "",
      Postgres: "",
      MongoDB: ""

    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.saveState = this.saveState.bind(this);
    this.submitHandler = this.submitHandler.bind(this);


  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  saveState = (checked, type, language) => {
    // console.log(this.props)
    if (checked === true) {
      var prevLang = [language];
      this.setState(prevState => ({
        [language]: type
      }));
    } else {
      this.setState({
        [language]: ""
      });
    }
  }


  submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
  }

  render() {

    return (
      <form className="container" onSubmit={e => this.submitHandler(e)} noValidate autoComplete="off">
        <div style={{ marginTop: "-100px" }} className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
          <h1 className="display-4">Language Skills</h1>
          <p className="lead"></p>
        </div>
        <div className="row">
          <div className="col-4">
            <FormControl component="fieldset">
              <FormLabel component="legend">Beginner</FormLabel>
              <FormGroup>
                {
                  this.state.languages.map(language => {
                    if (this.state[language] === "" || this.state[language] === "beginner") {
                      return <Languages disabled={false} type="beginner" saveState={this.saveState} key={language} language={language} />
                    } else {
                      return <Languages disabled={true} type="beginner" saveState={this.saveState} key={language} language={language} />
                    }
                  }
                  )
                }

              </FormGroup>

            </FormControl>
          </div>
          <div className="col-4">
            <FormControl component="fieldset">
              <FormLabel component="legend">Intermediate</FormLabel>
              <FormGroup>
                {
                  this.state.languages.map(language => {
                    if (this.state[language] === "" || this.state[language] === "intermediate") {
                      return <Languages disabled={false} type="intermediate" saveState={this.saveState} key={language} language={language} />
                    } else {
                      return <Languages disabled={true} type="intermediate" saveState={this.saveState} key={language} language={language} />

                    }
                  }
                  )
                }
              </FormGroup>
            </FormControl>
          </div>
          <div className="col-4">
            <FormControl component="fieldset">
              <FormLabel component="legend">Advanced</FormLabel>
              <FormGroup>
                {
                  this.state.languages.map(language => {
                    if (this.state[language] === "" || this.state[language] === "advanced") {
                      return <Languages disabled={false} type="advanced" saveState={this.saveState} key={language} language={language} />
                    }
                    else {
                      return <Languages disabled={true} type="advanced" saveState={this.saveState} key={language} language={language} />

                    }
                  }
                  )
                }
              </FormGroup>
            </FormControl>
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
              // component={Link}
              // to="/home"
              fullWidth
            >Next</Button>


          </div>
        </div>
      </form >
    )
  }
}

export default Experience
