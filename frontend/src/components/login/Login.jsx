import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../../services/user'

import './login.css'

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const savedUser = await userService.login(user)
      localStorage.setItem('profile', JSON.stringify(savedUser))
      navigate('/')
    } catch (error) {
      navigate('/login')
    }
  }

  return (
    <div className='user-form'>
      <h1>Login </h1>
      <form onSubmit={handleLogin}>
        <div>
          <TextField
            variant='filled'
            label='email'
            placeholder='Enter Email'
            fullWidth
            type={'email'}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <TextField
            variant='filled'
            label='Password'
            placeholder='Enter Password'
            fullWidth
            type={'password'}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <Button variant='contained' type="submit">Login</Button>
      </form>

    </div>
  )
}

export default Login