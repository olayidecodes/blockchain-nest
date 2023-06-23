import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='auth app__page'>
      <h1 className='section__title'>Login</h1>
      <form>
        <input type="text" placeholder='Username'/>
        <input placeholder='Password' />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login