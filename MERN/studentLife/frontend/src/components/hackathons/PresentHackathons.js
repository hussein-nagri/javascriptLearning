import React, { Component, Fragment } from 'react'
import axios from 'axios';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




class PresentHackathons extends Component {


  constructor(props) {
    super(props)
    this.state = {
      hackathons: []
    }
    this.renderTeam = this.renderTeam.bind(this);

  }

  async componentDidMount(prevProps) {
    await axios.get("/api/hackathons/present").then(hackathons => {
      this.setState({
        hackathons: hackathons.data
      })
    })
  }

  renderTeam = async (e, idName) => {
    e.persist();
    console.log(e, idName)
    idName = idName.split(" ").join("")
    console.log(idName)

    this.props.history.push(`/hackathons/${idName}`)

  }


  render() {


    return (
      <Fragment>

        <div style={{ marginTop: "-100px" }} className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" >
          <h1 className="display-4">Upcoming Hackathons</h1>
          <p className="lead"></p>
        </div>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {
              this.state.hackathons ? (
                this.state.hackathons.map((val, i) =>
                  <Card key={val.name} className="col-4" style={{ maxWidth: 345 }}>
                    <CardMedia
                      style={{
                        height: '150px',
                        width: '150px',
                        alignContent: "center",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      image={val.cImage}
                      title="hackathon Logo"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {val.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {val.date}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {val.location}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={e => this.renderTeam(e, val.name)} style={{ margin: "0 auto" }} size="small" color="primary">
                        Find team
                      </Button>
                    </CardActions>
                  </Card>
                )
              ) : (
                  <div>
                    hello mate
              </div>
                )
            }

          </div>
        </div>
      </Fragment >

    )
  }
}

export default PresentHackathons
