import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleLogin = this.handleLogin.bind(this);

  }


  handleLogin = (e) => {
    e.persist();
    console.log(e)


  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger text-white">StudentLife</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white js-scroll-trigger" href="#services">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white js-scroll-trigger" href="#signup">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary text-white" onClick={e => this.handleLogin(e)}><Link to='/login'>Log in </Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
