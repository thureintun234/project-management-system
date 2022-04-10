import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectService from '../../../services/project'
import taskService from '../../../services/task'
import userService from '../../../services/user'
import companyService from '../../../services/company'

import Select from 'react-select'

import './projectDetails.css'
import { Button } from '@mui/material'

const ProjectDetails = () => {
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])
  const [users, setUsers] = useState([])
  const [companies, setCompanies] = useState([])
  const { projectId } = useParams()
  const project = projects.find(p => p._id === projectId)
  const [newTask, setNewTask] = useState('')
  const [newUser, setNewUser] = useState('')

  const taskOptions = tasks.map(task => ({
    value: task._id,
    label: task.name
  }))

  const userOptions = users.map(user => ({
    value: user._id,
    label: user.username
  }))

  // fetch projects
  useEffect(() => {
    const fetchData = async () => {
      const result = await projectService.getAll()
      setProjects(result)
    }
    fetchData()
    return () => setProjects([])
  }, [])

  // fetch tasks
  useEffect(() => {
    const fetchData = async () => {
      const result = await taskService.getAll()
      setTasks(result)
    }
    fetchData()
    return () => setTasks([])
  }, [])

  // fetch users
  useEffect(() => {
    const fetchData = async () => {
      const result = await userService.getAll()
      setUsers(result)
    }
    fetchData()
    return () => setUsers([])
  }, [])

  // fetch companies
  useEffect(() => {
    const fetchData = async () => {
      const result = await companyService.getAll()
      setCompanies(result)
    }
    fetchData()
    return () => setCompanies([])
  }, [])

  const handleCreateTask = async () => {
    await projectService.addTaskToProject(projectId, newTask)
  }

  const handleCreateUser = async () => {
    await projectService.addUserToProject(projectId, newUser)
  }

  const colors = {
    progress: 'blue',
    success: 'green',
    stuck: 'red'
  }

  return (
    <div>
      {project && (
        <>
          <h2 style={{ marginBottom: '20px' }}>
            Details for {project?.name} - <span style={{ backgroundColor: colors[project.status], color: 'white' }}>{project.status}</span>
          </h2>
          <div className="deadline">Deadline( {project.deadline.slice(0, 10)})</div>
          <div className="project__details">
            <div className="project__details-tasks">
              <h6>Assigned Tasks
                <Button className='mx-3'
                  data-bs-toggle="modal" data-bs-target="#createTask"
                  variant='contained' color='primary'>
                  Add Task
                </Button></h6>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    project?.tasks.map(task => (
                      <tr key={task._id}>
                        <td>{task.name}</td>
                        <td>{task.status}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="project__details-users">
              <h6>Assigned Users
                <Button className='mx-3'
                  data-bs-toggle="modal" data-bs-target="#createUser"
                  variant='contained' color='primary'>
                  Add User
                </Button>
              </h6>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Username</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Company</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    project?.assigned_users.map(user => (
                      <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{companies.length > 0 && (companies.find(c => c._id === user.company).name)}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </>
      )
      }



      {/* Task Create Modal */}
      <div className="modal fade" id="createTask" tabIndex="-1" aria-labelledby="createModalTask" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Select options={taskOptions}
                onChange={selectedOption => setNewTask(selectedOption.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleCreateTask}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* End Task Create Modal */}

      {/* Project Create Modal */}
      <div className="modal fade" id="createUser" tabIndex="-1" aria-labelledby="createModalUser" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Select options={userOptions}
                onChange={selectedOption => setNewUser(selectedOption.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleCreateUser}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* End Project Create Modal */}
    </div >
  )
}

export default ProjectDetails