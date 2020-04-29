import React, { Component } from 'react'


import DoneIcon from '@material-ui/icons/Done';






class TeamSelect extends Component {
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


      </div>
    )
  }
}

export default TeamSelect
