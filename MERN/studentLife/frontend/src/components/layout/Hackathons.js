import React, { Component, useEffect, Fragment } from 'react'
import axios from 'axios';

class Hackathons extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: '',
      errors: []
    }
  }

  componentDidMount(prevProps) {
    axios.get("/api/hackathons")
      .then(res => {
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
      arr = arr.map(dict => dict.split(","));
    }
    return (
      < Fragment >
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
          <h1 className="display-4">Hackathons</h1>
          <p className="lead"></p>
        </div>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {
              arr && arr.map((dict, index) =>
                <Fragment key={index}>
                  <div className="card-body shadow-sm mt-3 mr-3" style={{ width: "12rem" }}>
                    <a>
                      <img style={{
                        height: '100px',
                        width: '50px'
                      }} src={dict[6].split("\'")[3]} className="card-img-top" />
                    </a>
                    <hr />
                    <ul className="list-unstyled">
                      <h4 className="card-title pricing-card-title">{dict[0].split(':')[1].split("\'").join("")}</h4>
                      <li>{dict[1].split(':')[1].split("\'").join("")}</li>
                      <li>{dict[3].split(':')[1].split("\'").join("")}</li>
                      <li>{dict[4].split(':')[1].split("\'").join("")}</li>
                      <li><a href={dict[5].split("\'")[3]} target="_blank">Website Link</a></li>
                    </ul>
                  </div>
                </Fragment>
              )
            }
          </div>
        </div>
      </Fragment >

    )
  }
}

export default Hackathons


