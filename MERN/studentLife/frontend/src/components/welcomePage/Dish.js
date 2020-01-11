import React, { Component } from 'react'

class Dish extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.submitHandler = this.submitHandler.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.inputOnclickHandler = this.inputOnclickHandler.bind(this);
  }


  render() {
    console.log(this.props)




    return (
      <div className="dish" id={this.props.dish}>
        {this.props.dish}
      </div>
    )
  }
}

export default Dish
