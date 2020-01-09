import React, { Component, Fragment } from 'react'

import logo from '../../img/logo.png'
import sitting_group from '../../img/sitting_group.jpg'


export class TableContent extends Component {
  render() {
    return (
      <Fragment>
        <header className="text-white bg-light">
          <div className="container text-center bg-light">
            <img className="img-fluid thumbnail" alt="sitting group of people" src={sitting_group} />
            <div className="centered align-middle">

              <h1 className="font-size-lg text-dark">StudentLife</h1>
              <p className="lead text-dark font-size-sm">A new and innovative way of connecting with LIKE people.</p>
              <center>
                <img src={logo} alt="Student Life logo" className="thumbnail img-fluid-70 img-fluid-sm d-none d-sm-none d-md-block" />
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
      </Fragment>
    )
  }
}

export default TableContent
