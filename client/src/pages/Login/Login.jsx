import React, { useContext, useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { AuthContext } from '../../context/authContext'


const Login = () => {
  const [ inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)

  const handleChange = e => { 
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      await login(inputs)
      navigate("/")
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth app__page'>
      <h1 className='section__title'>Login</h1>
      <form>
        <input type="text" placeholder='Username' onChange={handleChange} name='username'/>
        <input placeholder='Password' onChange={handleChange} name='password' />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login