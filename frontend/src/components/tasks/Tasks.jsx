import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import taskService from '../../services/task'
import Button from '@mui/material/Button';

import './tasks.css'
import Task from './task/Task';

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    taskService
      .getAll()
      .then(returnedObject => setTasks(returnedObject))
  }, [])



  return (
    <div >
      <Link to='/task/new' style={{ float: 'right' }}>
        <Button variant='contained' color='primary'>
          Add
        </Button>
      </Link>
      <h1>Tasks</h1>
      <div className="tasks__main">
        {
          tasks.map(task => (
            <Task key={task._id} task={task} />
          ))
        }
      </div>
    </div>
  )
}

export default Tasks