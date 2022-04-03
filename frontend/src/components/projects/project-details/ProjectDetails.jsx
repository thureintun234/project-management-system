import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectService from '../../../services/project';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

import './projectDetails.css'

const ProjectDetails = () => {
  const [projects, setProjects] = useState([])
  const { id } = useParams()
  const project = projects.find(p => p._id === id)

  useEffect(() => {
    projectService
      .getAll()
      .then(returnedObject => setProjects(returnedObject))
  }, [])

  console.log(projects)
  console.log(id)
  console.log(project)

  // const createTaskData = (name) => {
  //   return { name }
  // }

  // const createUserData = (username, email, company) => {
  //   return { username, email, company }
  // }

  // const userRows = project?.assigned_users.map(({ username, email, company }) => (
  //   createUserData(username, email, company)
  // ))

  // const taskRows = project?.tasks.map(({ name }) => (
  //   createTaskData(name)
  // ))

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Details for {project?.name}</h2>
      <div className="project__details">
        <div className="project__details-tasks">
          <h6>Assigned Tasks</h6>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                project.tasks.map(task => (
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
          <h6>Assigned Users</h6>
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
                project.assigned_users.map(user => (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.company?.name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {/*  <div className="project__details">
        <div className="project__details-tasks">
          <h3>Assigned Tasks</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {taskRows?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="project__details-users">
          <h3>Assigned Users</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Company&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userRows.map((row) => (
                  <TableRow
                    key={row.email}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.company}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div> */}
      {/*<div className="project__details">
        <div className="project__details-tasks">
          <h3>Assigned Tasks</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {taskRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="project__details-users">
          <h3>Assigned Users</h3>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Company&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userRows.map((row) => (
                  <TableRow
                    key={row.email}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.username}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.company}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div> */}
    </div>
  )
}

export default ProjectDetails