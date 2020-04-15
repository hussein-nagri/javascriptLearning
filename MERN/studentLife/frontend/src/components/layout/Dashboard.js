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
          <p style={{ textAlign: "center" }}>
            <span style={{ textDecoration: "underline", color: "#000000" }}>
              <strong>Welcome!&nbsp;</strong>
            </span>
          </p>
          <p style={{ textAlign: "left" }}>
            Are you attending a hackathon?
        </p>
        </div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={logo}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Welcome! Are you attending a hackathon?
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
      </Fragment>
    )
  }
}

export default Dashboard
