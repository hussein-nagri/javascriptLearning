import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password, } = formData

  const onChange = (e) => {
    setFormData({
      //the ... means keep everything the same except whats coming after
      ...formData,
      [e.target.name]: e.target.value
    })
  };


  const onSubmit = async (e) => {
    e.preventDefault();
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



  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>

        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}
            required />


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

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/login">Sign Up</Link>
      </p>
    </Fragment>
  )
}

export default Login
