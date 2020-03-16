import React, { Component, Fragment } from 'react'

import logo from '../../img/logo.png'
import sitting_group from '../../img/sitting_group.jpg'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';


import DoneIcon from '@material-ui/icons/Done';

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
                <List >
                  <ListItem>
                    <ListItemIcon>
                      <DoneIcon />
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: "-5%" }}
                      primary="Find sports to play near you!"
                    />
                    <ListItemIcon>
                      <DoneIcon />
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: "-5%" }}
                      primary="Learn from different study groups"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DoneIcon />
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: "-5%" }}
                      primary="Collaborate with others on various projects"
                    />
                    <ListItemIcon>
                      <DoneIcon />
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: "-5%" }}
                      primary=" Meet with like minded people"
                    />
                  </ListItem>

                </List>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <h2 style={{ textAlign: "center" }}>Features</h2>
                <List >
                  <ListItem>
                    <ListItemIcon>
                      <DoneIcon />
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: "-5%" }}
                      primary="Hackathon Group Formation"
                    />
                    <ListItemIcon>
                      <DoneIcon />
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: "-5%" }}
                      primary="Study Groups Nearby"
                    />

                    <ListItemIcon>
                      <DoneIcon />
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: "-5%" }}
                      primary="Pickup Sports Nearby"
                    />
                  </ListItem>

                </List>

              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default TableContent
