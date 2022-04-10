import React, { useState, useEffect } from 'react'
import projectService from '../../../services/project'
import companyService from '../../../services/company'
import userService from '../../../services/user'
import './projectCreate.css'
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import Select from 'react-select'

const ProjectCreate = () => {
  const [project, setProject] = useState({
    name: '',
    status: '',
    deadline: new Date(),
    company: '',
    complete: false,
    description: '',
    used_tech: [],
    user: ''
  })
  const [companies, setCompanies] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    companyService.getAll().then(result => setCompanies(result))
    return () => setCompanies([])
  }, [])

  useEffect(() => {
    userService.getAll().then(result => setUsers(result))
  })

  const statusOptions = [
    { value: 'progress', label: 'progress' },
    { value: 'success', label: 'success' },
    { value: 'stuck', label: 'stuck' }
  ]

  const completeOptions = [
    { value: true, label: 'True' },
    { value: false, label: 'False' }
  ]

  const companyOptions = companies.map(company => ({
    value: company._id,
    label: company.name
  }))

  const userOptions = users.map(user => ({
    value: user._id,
    label: user.username
  }))

  const techOptions = ['react', 'redux', 'javascript', 'Node']

  const addProject = e => {
    e.preventDefault()

    const newProject = {
      name: project.name,
      status: project.status,
      deadline: project.deadline,
      company: project.company,
      complete: project.complete,
      used_tech: project.used_tech,
      user: project.user,
      description: project.description
    }

    projectService.create(newProject)

    setProject({
      name: '',
      status: '',
      deadline: new Date(),
      company: '',
      complete: '',
      used_tech: [],
      user: '',
      description: ''
    })
  }

  return (
    <div className='project-form'>
      <form onSubmit={addProject}>
        <div>
          <TextField
            variant='filled'
            label='Name'
            placeholder='Enter Name'
            fullWidth
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
        </div>
        <div>
          <Select options={statusOptions}
            onChange={selectedOption => setProject({ ...project, status: selectedOption.value })} />
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={project.deadline}
                onChange={(value) => setProject({ ...project, deadline: value })}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div>
          <Autocomplete
            multiple
            onChange={(e, value) => setProject({ ...project, used_tech: value })}
            id="tags-filled"
            options={techOptions.map((option) => option)}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Technologies"
                placeholder="Used Technologies"
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="">Company</label>
          <Select options={companyOptions}
            onChange={selectedOption => setProject({ ...project, company: selectedOption.value })} />
        </div>
        <div>
          <label htmlFor="">Complete</label>
          <Select options={completeOptions}
            onChange={selectedOption => setProject({ ...project, complete: selectedOption.value })} />
        </div>
        <div>
          <label htmlFor="">User</label>
          <Select options={userOptions}
            onChange={selectedOption => setProject({ ...project, user: selectedOption.value })} />
        </div>
        <div>
          <TextField
            variant='filled'
            label='Description'
            placeholder='Enter Desc'
            fullWidth
            value={project.description}
            onChange={(e) => setProject({ ...project, description: e.target.value })}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ProjectCreate