import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//MUI imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core'


const styles = {
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
}

class Scream extends Component {
  render() {
    const { classes, scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props



    return (
      <Card className={classes.card}>
        <CardMedia title="Profile Image" className={classes.image} image={userImage}></CardMedia>
        <CardContent className={classes.content}>
          <Typography component={Link} to={`/users/${userHandle}`} color="primary" variant="h5">{userHandle}</Typography>
          <Typography variant="body2" color="textSecondary">{createdAt.toString()}</Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Scream);
