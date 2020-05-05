import React, { Component, Fragment } from 'react'


import DoneIcon from '@material-ui/icons/Done';
import { Button } from '@material-ui/core';






class TeamSelect extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);

  }

  onClick = () => {
    this.props.history.push("/home")
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <DoneIcon
            style={{
              color: "green",
              height: "40%",
              width: "40%",
            }}
          />
        </div >
        <div style={{ textAlign: "center", fontSize: "x-large" }}>
          Please check your email. We will update it once we have an optimal team for you

        </div>

        {/* //TODO: need to have a frontnend button to renavigate to
            the home page once submitted */}
        
        <div style={{ textAlign: "center", marginTop: "25px"}}>
          <Button
            color="primary"
            variant="contained"
            style={{
              textAlign: "center",
              margin: "0 auto"
            }}
            onClick= {this.onClick}
          >
            Back To Home
        </Button>
        </div>


      </div>
    )
  }
}

export default TeamSelect
