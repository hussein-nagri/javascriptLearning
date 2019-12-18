import React, { Component } from 'react'
import { Grid } from '@material-ui/core/';
import axios from 'axios'

import Scream from '../components/Scream'
import Profile from '../components/Profile'

class home extends Component {
  state = {
    screams: null
  }
  componentDidMount() {
    axios.get("/screams")
      .then(res => {
        console.log(res.data)
        this.setState({
          screams: res.data
        });
      })
      .catch(err => {
        console.error(err);
      })
  }
  render() {
    let recemtScreamsmarkup = this.state.screams ? (
      this.state.screams.map(scream => <Scream key={scream.id} scream={scream} />)
    ) : (
        <p> Loading...</p>
      )
    return (
      <Grid container spacing={2} >
        <Grid item sm={8} xs={12}>
          {recemtScreamsmarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid >
    )
  }
}

export default home
