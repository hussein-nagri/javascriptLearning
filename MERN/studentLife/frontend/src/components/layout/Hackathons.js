import React, { Component, useEffect } from 'react'
import axios from 'axios';


class Hackathons extends Component {

  componentDidMount(prevProps) {


    axios.get("/api/hackathons")
      .then(res => {
        console.log(res);
      })
  }



  render() {
    return (
      <div>
        WElcome to the hackathon page
      </div>
    )
  }
}

export default Hackathons
