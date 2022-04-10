import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../../assets/images/blue.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useNavigate } from 'react-router-dom';

import './project.css'

const Project = ({ project }) => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)

  const toggleLike = () => {
    setLike(!like)
    console.log(like)
  }
  return (
    <div>
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
          <Typography variant="body" color="text.secondary">
            {project.description}
          </Typography>
          <Typography variant="h6">
            {project.used_tech.map(tech => (
              <span key={tech}>#{tech} </span>
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={toggleLike}>
            {like === false ? <ThumbUpOffAltIcon /> : <ThumbUpAltIcon />} Like
          </Button>
          <Button size='small' onClick={() => navigate(`${project._id}`)}>DETAILS</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Project