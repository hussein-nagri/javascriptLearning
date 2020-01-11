import React, { Component, Fragment } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import TableContent from './TableContent'


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      errors: []
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.inputOnclickHandler = this.inputOnclickHandler.bind(this);
  }

  submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    const form = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
    }

    await axios.post("/api/users", form)
      .then(res => console.log("Hi", res))
      .catch(err => {
        // console.error(err)
        console.log(err.response.data)
        var ers = err.response.data.errors
        var errors = []
        ers.forEach(error =>
          errors.push(error.msg)
        );
        this.setState({
          errors: errors
        });

        this.state.errors.map(error => alert(error))
        this.setState({
          errors: {}

        });
        //  if (err.response.data)
      })

    console.log("Done")
    console.log(this.state.errors)

  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }
    )

  }

  inputOnclickHandler = (e) => {
    e.persist();
    if (e.target.value === 'First Name' ||
      e.target.value === 'Last Name' ||
      e.target.value === 'Email' ||
      e.target.value === 'Password') {
      console.log("Here")
      this.setState({
        [e.target.name]: ""
      })
    }
  }



  render() {
    return (
      <Fragment>
        <Navbar />
        <TableContent />
        <section id="signup" className="text-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="text-center text-dark">Sign Up</h1>
                <br />

                <form method="post" onSubmit={e => this.submitHandler(e)}>
                  <div className="form-row">
                    <div className="col">
                      <input type="text" placeholder="First Name" className="form-control input-text" onClick={this.inputOnclickHandler} onChange={e => this.onChangeHandler(e)} value={this.state.fname} name="fname" />
                    </div>

                  </div>

                  <br />

                  <div className="form-row">
                    <div className="col">
                      <input type="text" placeholder="Last Name" className="form-control input-text" onClick={this.inputOnclickHandler} onChange={e => this.onChangeHandler(e)} value={this.state.lname} name="lname" />
                    </div>
                  </div>

                  <br />

                  <div className="form-row">
                    <div className="col">
                      <input type="text" placeholder="Email" className="form-control input-text" onClick={this.inputOnclickHandler} onChange={e => this.onChangeHandler(e)} value={this.state.email} name="email" />
                    </div>
                  </div>

                  <br />

                  <div className="form-row">
                    <div className="col">
                      <input type="password" placeholder="Password" className="form-control input-text" onClick={this.inputOnclickHandler} onChange={e => this.onChangeHandler(e)} value={this.state.password} name="password" />
                    </div>
                  </div>

                  <br />
                  <center>
                    <div className="form-row">
                      <div className="col">
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                      </div>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div >
        </section >

      </Fragment >
    )
  }
}

export default HomePage
