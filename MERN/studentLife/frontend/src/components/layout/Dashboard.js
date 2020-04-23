import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import logo from '../../img/logo.png';
import hackathon from '../../img/hackathon.jpeg'
import hackathonProcess from '../../img/hackathonProcess.png'


import { Link } from 'react-router-dom';
import { Fragment } from 'react';


class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.useStyles = this.useStyles.bind(this);

  }


  useStyles = () => makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  render() {

    const classes = this.useStyles();

    return (
      <Fragment>
        <div>
          <h1 style={{ textAlign: "center" }}>
            <span style={{ textDecoration: "underline", color: "#000000" }}>
              <strong>Welcome!</strong>
            </span>
          </h1>
        </div>
        <div className="row">
          <div className="col-4">

          </div>

          <div style={{ textAlign: "center" }} className="col-4 ">
            <Card style={{
              width: "100%",

            }} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={logo}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Are you attending a hackathon?
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Hackathons are a fun way to interact with people like you, and help make a product from scratch.
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div size="small" color="primary">
                  <Link to="/presentHackathons">  YES </Link>
                </div>
                <div size="small" color="primary">
                  <Link to="/hackathons"> See Upcoming Hackathons</Link>
                </div>
              </CardActions>
            </Card>

          </div>

          <div className="col-4">

          </div>
        </div>
        <div style={{ marginTop: "25px" }} className="row">
          <div className="col-6">

            <img src={hackathonProcess} alt="Hackathons " style={{ width: "500px" }} className="thumbnail " />

          </div>
          <div className="col-6">

            <img src={hackathon} alt="group work logo" className="thumbnail  d-none d-sm-none d-md-block" />


          </div>

        </div>

      </Fragment>
    )
  }
}

export default Dashboard
