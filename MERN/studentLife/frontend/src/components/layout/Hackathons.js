import React, { Component, Fragment } from 'react'
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Hackathons extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: '',
      errors: []
    }
  }

  async componentDidMount(prevProps) {
    await axios.get("/api/hackathons/init");
    await axios.get("/api/hackathons")
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
        <div style={{ marginTop: "-100px" }} className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
          <h1 className="display-4">Hackathons</h1>
          <p className="lead"></p>
        </div>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {
              arr && arr.map((dict, index) =>
                <Fragment key={index}>
                  <Card className="col-3" style={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        img style={{
                          height: '150px',
                          width: '150px',
                          alignContent: "center",
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        image={(dict[6].split("\'")[3]).toString()}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {dict[0].split(':')[1].split("\'").join("")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {dict[3].split(':')[1].split("\'").join("")}
                          {dict[4].split(':')[1].split("\'").join("")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <li>{dict[1].split(':')[1].split("\'").join("")}</li>

                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button style={{ margin: "0 auto" }} size="small" color="primary">
                        <a href={dict[5].split("\'")[3]} target="_blank" rel="noopener noreferrer">Sign Up</a>
                      </Button>
                    </CardActions>
                  </Card>
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


