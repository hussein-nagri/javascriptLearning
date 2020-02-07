import React, { Component, useEffect, Fragment } from 'react'
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
      arr = arr.map(dict => dict.split(","));
    }
    console.log(arr);
    return (
      < Fragment >
        {
          arr && arr.map((dict, index) =>
            <Fragment key={index}>

              <div className="container">
                <div className="card-deck mb-3 text-center">
                  <div className="card-body shadow-sm mt-3 mr-3" style={{ width: "12rem" }}>
                    <a href={dict["link"]}>
                      <img src={dict["logo"]} className="card-img-top" />
                    </a>
                    <hr />
                    <ul className="list-unstyled">
                      <h4 className="card-title pricing-card-title">{dict['name']}</h4>
                      <li>{dict['start date']}</li>
                      <li>{dict['city']}</li>
                      <li>{dict['state']}</li>
                      <li><a href={dict['link']} target="_blank">Website Link</a></li>
                    </ul>
                  </div>

                </div>
              </div>
              {/* 
              <div>
                {dict[0]}
              </div>
              <div>
                {dict[1]}
              </div>
              <div>
                {dict[2]}
              </div>
              <div>
                Hello
            </div> */}
            </Fragment>


          )

        }

      </Fragment>

    )
  }
}

export default Hackathons
