import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAlert } from '../../actions/alert'

function Register(props) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData({
      //the ... means keep everything the same except whats coming after
      ...formData,
      [e.target.name]: e.target.value
    })
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("pass not match")
    } else {
      console.log("success");



      //use instead of redux:
      // const newUser = {
      //   name,
      //   email,
      //   password
      // }

      // try {

      //   //since we're sending data we gotta do this
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   }

      //   //creating body of what we wanna send
      //   const body = JSON.stringify(newUser);
      //   //axios returns a promise (we use await)
      //   const res = await axios.post("/api/users", body, config);
      //   console.log(res.data)


      // } catch (error) {
      //   console.error(error)
      // }



    }
  }



  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}
            required />
          <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2} onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/register">Sign In</Link>
      </p>
    </Fragment>
  )
}
export default connect(null, { setAlert })(Register);