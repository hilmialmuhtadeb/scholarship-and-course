import React from 'react'
import { LoginPage } from '../../assets'
import "./register.css"

const Register = () => {
  return (
    <div className="login-page">
      <div className="bglogin" style={{ 
        backgroundImage: `url(${LoginPage})`
      }}>
      <div className="login-area">
        <p className="title">Register</p>
        <form className="login-item">
          <label className="label">Nama Lengkap</label>
          <input className="input" type="text"/>
          <label className="label">Username</label>
          <input className="input" type="text"/>
          <label className="label">Password</label>
          <input className="input" type="password"/>
        </form>
        <a href="login"><button className="button">Register</button></a>
        <p>Already have an account? <a className="register-link" href="/login">Login</a></p>
        <a href="/" className="home-link">Back to home</a>
      </div>
      </div>
    
    </div>
  )
}

export default Register
