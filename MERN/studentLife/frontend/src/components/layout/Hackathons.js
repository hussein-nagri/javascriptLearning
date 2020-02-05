import React, { Component, useEffect } from 'react'
import axios from 'axios';


class Hackathons extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: '',
      errors: []
    }
    // this.submitHandler = this.submitHandler.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.inputOnclickHandler = this.inputOnclickHandler.bind(this);
  }

  componentDidMount(prevProps) {


    axios.get("/api/hackathons")
      .then(res => {
        console.log(res.data);

        // res.data["data"].forEach(item => console.log(item));
        this.setState({
          data: res
        })
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
