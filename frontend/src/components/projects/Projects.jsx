import React, { useEffect, useState } from 'react'
import projectService from '../../services/project'
import Button from '@mui/material/Button';

import './projects.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Project from './project/Project';

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    projectService
      .getAll()
      .then(returnedObject => setProjects(returnedObject))
  }, [])

  console.log('Projects')

  return (
    <div >
      <Link to='/project/new' style={{ float: 'right' }}>
        <Button variant='contained' color='primary'>
          Add
        </Button>
      </Link>
      <h1>Projects</h1>
      <div className="projects__main">
        {
          projects.map(project => (
            <Project key={project._id} project={project} />
          ))
        }
      </div>
      <Outlet />
    </div>
  )
}

export default Projects