import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import companyService from '../../../services/company'

const CompanyCreate = () => {
  const [name, setName] = useState('')

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const addCompany = e => {
    e.preventDefault()
    const newObject = {
      name
    }
    companyService
      .create(newObject)

    setName('')
  }

  return (
    <div>
      <form onSubmit={addCompany}>
        <div>
          <TextField value={name} onChange={handleNameChange} label='Name' placeholder='Enter Name' />
        </div>
        <Button type="submit" variant='contained'>Add</Button>
      </form>
    </div>
  )
}

export default CompanyCreate