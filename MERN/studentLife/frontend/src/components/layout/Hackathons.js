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
        // console.log(res.data);
        this.setState({
          data: res.data
        })
      })
  }



  render() {
    if (this.state.data) {
      var arr = this.state.data.split("[")[1].slice(0, -2);
      arr = arr.split("}, {");
      arr[0] = arr[0].substr(1);
    }
    console.log(arr);
    return (
      //     {
      //       if(this.state.data) {
      //     <div>{data}</div>
      //   }
      // }
      < div >
        WElcome to the hackathon page
      </div >
    )
  }
}

export default Hackathons
