import React from 'react'
import "./login.css"
import { LoginPage } from '../../assets'

const Login = () => {
  return (
    <div className="login-page">
      <div className="bglogin" style={{ 
        backgroundImage: `url(${LoginPage})`
      }}>
      <div className="login-area">
        <p className="title">Login</p>
        <form className="login-item">
          <label className="label">Username</label>
          <input className="input" type="text"/>
          <label className="label">Password</label>
          <input className="input" type="password"/>
        </form>
        <a href="/"><button className="button">Login</button></a>
        <p>Don't have an account? <a className="register-link" href="/register">Register</a></p>
      </div>
      </div>
    
    </div>
  )
}

export default Login
