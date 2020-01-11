import React, { Component } from 'react'
import Dish from './Dish';


class Pager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: ["Apples, Pear, Cinnamon"],
      counter: 0,
      errors: []
    }
    // this.submitHandler = this.submitHandler.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addDish = this.addDish.bind(this);
  }

  addDish = () => {
    this.setState({
      counter: this.state.counter + 1,
      dishes: [...this.state.dishes, `New dish ${this.state.counter}`]
    })
  }
  render() {


    return (
      <div className="container">
        <div className="add-dish">
          <button type="button" onClick={this.addDish}>
            Add Dish
          </button>
        </div>
        {(this.state.dishes.map(dish => <Dish dish={dish} />))}
      </div>
    )
  }
}

export default Pager
