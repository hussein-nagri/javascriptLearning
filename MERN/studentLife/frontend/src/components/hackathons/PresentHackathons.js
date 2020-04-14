import React, { Component } from 'react'
import axios from 'axios';




class PresentHackathons extends Component {


  constructor(props) {
    super(props)
    this.state = {
      hackathons: []
    }
    // this.useStyles = this.useStyles.bind(this);

  }

  async componentDidMount(prevProps) {
    await axios.get("/api/hackathons/present").then(hackathons => {
      this.setState({
        hackathons: hackathons.data
      })
    })

  }

  render() {


    return (
      <div>
        hello mate
      </div>
    )
  }
}

export default PresentHackathons
