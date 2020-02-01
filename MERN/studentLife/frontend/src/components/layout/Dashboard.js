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
          <Button size="small" color="primary">
            Yes
        </Button>
          <div size="small" color="primary">
            <Link to="/hackathons"> See Upcoming Hackathons</Link>
        </div>
        </CardActions>
      </Card>
    )
  }
}

export default Dashboard
