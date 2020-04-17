import React, { Component } from 'react'
import axios from 'axios'


class SelectedHackathon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hackathons: [],
      pageName: ""
    }
    //  this.renderTeam = this.renderTeam.bind(this);
  }

  async componentDidMount(prevProps) {

    var address = window.location.href.split("/")
    address = address[address.length - 1]
    console.log(address)
    this.setState({
      pageName: address
    })


    await axios.post(`/api/hackathons/${address}`, {
      address
    }).then(data => {
      console.log(data)
    })
  }


  render() {
    return (
      <div>
        welcome to the {this.state.pageName} page
      </div>
    )
  }
}

export default SelectedHackathon
