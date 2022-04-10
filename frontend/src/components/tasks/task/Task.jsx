import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../../assets/images/cyan.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import './task.css'
import { useNavigate } from 'react-router-dom';

const Task = ({ task }) => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)

  const toggleLike = () => {
    setLike(!like)
    console.log(like)
  }

  const colors = {
    progress: 'blue',
    success: 'green',
    stuck: 'red'
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} key={task._id} className='tasks__main-item'>
        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {task.name} <span style={{ backgroundColor: colors[task.status], color: 'white' }}>{task.status}</span>
          </Typography>
          <Typography variant="h6">
            {task.used_tech.map(tech => (
              <span key={tech}>#{tech} </span>
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={toggleLike}>
            {like === false ? <ThumbUpOffAltIcon /> : <ThumbUpAltIcon />} Like
          </Button>
          <Button onClick={() => navigate('/')}>Back Home</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Task