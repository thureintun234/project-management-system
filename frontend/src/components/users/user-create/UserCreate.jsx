import React, { useEffect, useState } from 'react'
import userService from '../../../services/user'
import companyService from '../../../services/company'
import TextField from '@mui/material/TextField'
import Select from 'react-select'

import './userCreate.css'

const UserCreate = () => {
  const [user, setUser] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    active: true,
    company: ''
  })
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    companyService.getAll().then(result => setCompanies(result))
  }, [])

  const companyOptions = companies.map(company => ({
    value: company._id,
    label: company.name
  }))

  const addUser = e => {
    e.preventDefault()
    const newUser = {
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      active: user.active,
      company: user.company
    }
    userService.create(newUser)

    setUser({
      ...user, username: '', first_name: '', last_name: '',
      email: '', password: '', active: false, company: ''
    })
  }

  return (
    <div className='user-form'>
      <form onSubmit={addUser}>
        <div>
          <TextField
            variant='filled'
            label='Username'
            placeholder='Enter Username'
            fullWidth
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div>
          <TextField
            variant='filled'
            label='First Name'
            placeholder='Enter First Name'
            fullWidth
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          />
        </div>
        <div>
          <TextField
            variant='filled'
            label='Last Name'
            placeholder='Enter Last Name'
            fullWidth
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          />
        </div>
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
        <div>
          <label htmlFor="">Company</label>
          <Select options={companyOptions}
            onChange={selectedOption => setUser({ ...user, company: selectedOption.value })} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default UserCreate