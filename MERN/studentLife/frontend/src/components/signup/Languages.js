import React, { Component } from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false

    }
    this.onCheck = this.onCheck.bind(this);

  }


  async onCheck() {

    await this.setState({ checked: !this.state.checked });

    console.log(this.props)
    this.props.saveState(this.state.checked, this.props.type, this.props.language);
  }

  render() {
    return (
      <FormControlLabel
        control={<Checkbox disabled={this.props.disabled} checked={this.state.checked} onClick={this.onCheck} />}
        label={this.props.language}
      />
    )
  }
}

export default Languages
