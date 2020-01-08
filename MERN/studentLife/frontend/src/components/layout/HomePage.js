import React, { Component, Fragment } from 'react'
import logo from '../../img/logo.png'
import sitting_group from '../../img/sitting_group.jpg'


class HomePage extends Component {
  render() {
    return (


      <Fragment>
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
                  <a className="btn btn-outline-primary" href="/login">Log in</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="text-white bg-light">
          <div className="container text-center bg-light">
            <img className="img-fluid thumbnail" alt="sitting group of people" src={sitting_group} />
            <div className="centered align-middle">

              <h1 className="font-size-lg text-dark">StudentLife</h1>
              <p className="lead text-dark font-size-sm">A new and innovative way of connecting with LIKE people.</p>
              <center>
                <img src={logo} className="thumbnail img-fluid-70 img-fluid-sm d-none d-sm-none d-md-block" />
              </center>
            </div>
          </div>
        </header>

        <div className="container">
          <hr className="divider" />
        </div>

        <section id="about">
          <div className="container text-black">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Why StudentLife</h2>
                <p className="lead">
                  Ever want to do something fun with like-minded people? Are all your friends busy? StudentLife will find people LIKE you, and connect you together.
          </p>
                <ul>
                  <li>Find sports to play near you!</li>
                  <li>Collaborate with others on various projects</li>
                  <li>Learn from different study groups</li>
                  <li>Meet with like minded people</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Features</h2>
                <ul>
                  <li>Hackathon Group Formation</li>
                  <li>Study Groups Nearby</li>
                  <li>Pickup Sports Nearby</li>
                </ul>
                <p className="lead"></p>
              </div>
            </div>
          </div>
        </section>

        <section id="signup" className="text-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="text-center text-dark">Sign Up</h1>
                <br />

                <form method="POST" action="/signUp">
                  <div className="form-row">
                    <div className="col">
                      <input type="text" className="form-control input-text" name="fname" placeholder="First name" required />
                    </div>
                  </div>

                  <br />

                  <div className="form-row">
                    <div className="col">
                      <input type="text" className="form-control input-text" name="lname" placeholder="Last name" required />
                    </div>
                  </div>

                  <br />

                  <div className="form-row">
                    <div className="col">
                      <input type="email" className="form-control input-text" name="email" placeholder="Email" required />
                    </div>
                  </div>

                  <br />

                  <div className="form-row">
                    <div className="col">
                      <input type="password" className="form-control input-text" name="password" placeholder="Password" required />
                    </div>
                  </div>

                  <br />

                  <center>
                    <div className="form-row">
                      <div className="col">
                        <button className="btn btn-primary btn-lg">Sign Up</button>
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
