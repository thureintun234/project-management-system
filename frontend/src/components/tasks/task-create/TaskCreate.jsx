import React, { useState, useEffect } from 'react'
import taskService from '../../../services/task'
import projectService from '../../../services/project'
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import './taskCreate.css'
import { Stack } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import Select from 'react-select'


const TaskCreate = () => {
  const [task, setTask] = useState({
    name: '',
    status: '',
    due_date: new Date('2022-04-01-18T21:11:54'),
    used_tech: [],
    project: ''
  })
  const [projects, setProjects] = useState([])

  const techOptions = ['react', 'redux', 'javascript', 'Node']

  useEffect(() => {
    projectService.getAll().then(result => setProjects(result))
  }, [])

  const projectOptions = projects.map(project => ({
    value: project._id,
    label: project.name
  }))

  const statusOptions = [
    { value: 'progress', label: 'progress' },
    { value: 'success', label: 'success' },
    { value: 'stuck', label: 'stuck' }
  ]

  const addTask = e => {
    e.preventDefault()
    const newTask = {
      name: task.name,
      status: task.status,
      due_date: task.due_date,
      used_tech: task.used_tech,
      project: task.project
    }
    taskService.create(newTask)

    setTask({
      ...task,
      name: '',
      status: '',
      due_date: new Date('2022-04-01-18T21:11:54'),
      used_tech: [],
      project: ''
    })
  }

  return (
    <div className='task-form'>
      <form onSubmit={addTask}>
        <div>
          <TextField
            variant='filled'
            label='Name'
            placeholder='Enter Name'
            fullWidth
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
        </div>
        <div>
          <Select options={statusOptions}
            onChange={selectedOption => setTask({ ...task, status: selectedOption.value })} />
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={task.due_date}
                onChange={(value) => setTask({ ...task, due_date: value })}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div>
          <Autocomplete
            multiple
            onChange={(e, value) => setTask({ ...task, used_tech: value })}
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
          <Select options={projectOptions}
            onChange={selectedOption => setTask({ ...task, project: selectedOption.value })} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default TaskCreate