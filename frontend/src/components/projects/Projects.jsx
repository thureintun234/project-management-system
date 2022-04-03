import React, { useEffect, useState } from 'react'
import projectService from '../../services/project'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../assets/images/blue.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import './projects.css'
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    projectService
      .getAll()
      .then(returnedObject => setProjects(returnedObject))
  }, [])

  return (
    <div >
      <Link to='/project/new' style={{ float: 'right' }}>
        <Button variant='contained' color='primary'>
          Add
        </Button>
      </Link>
      <h1>Project</h1>
      <div className="projects__main">
        {
          projects.map(project => (
            <Card sx={{ maxWidth: 345 }} key={project._id} className='projects__main-item'>
              <CardMedia
                component="img"
                height="140"
                image={logo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"> <ThumbUpOffAltIcon /> Like</Button>
                <Link to={`/project/${project._id}/details`}>
                  DETAILS
                </Link>
              </CardActions>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Projects