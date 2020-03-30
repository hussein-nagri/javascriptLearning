import React, { Component } from 'react'

import axios from 'axios';


class MainProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInfo: {}
    }
    // this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  async componentDidMount() {

    var token = localStorage.getItem("token");
    await axios.get("/api/users/getDetails", {
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(res => {
        this.setState({
          userInfo: res.data
        })
      })

  }

  render() {




    return (


      <div>
        {this.state.userInfo ?
          (<div>hi ther</div>)
          : <div>Hello</div>}
      </div>
    )
  }
}

export default MainProfile
