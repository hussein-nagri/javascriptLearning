import React, { Component } from 'react'

import { steps } from '../signup/SignUpHead'

import MultiStep from 'react-multistep'


class MainProfile extends Component {
  render() {
    return (
      <div>
        <MultiStep showNavigation={false} steps={steps} />
      </div>
    )
  }
}

export default MainProfile
