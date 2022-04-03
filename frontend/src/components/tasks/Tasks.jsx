import React, { useEffect, useState } from 'react'
import taskService from '../../services/task'

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    taskService
      .getAll()
      .then(returnedObject => setTasks(returnedObject))
  }, [])

  return (
    <div>
      <h1>Task</h1>
      <ul>
        {
          tasks.map(task => (
            <li key={task._id}>
              {task.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Tasks