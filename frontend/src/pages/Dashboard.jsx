import React from 'react'
import Paper from '@mui/material/Paper';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import black from '../assets/images/black.jpg'
import gray from '../assets/images/gray.jpg'
import blue from '../assets/images/blue.jpg'
import cyan from '../assets/images/cyan.jpg'

import './dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className='dashboard__content'>
        <div className='dashboard__content-item project'>
          <Link to='/project'>
            <Card>
              <CardHeader title="Projects" subheader='view projects' />
              <CardContent>
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={blue}
                  alt="green iguana"
                />
              </CardContent>
              <CardActions >
                <Typography variant='body2' color="text.secondary">
                  You can view the projects, manage them and add tasks to the projects
                </Typography>
              </CardActions>
            </Card>
          </Link>
        </div>
        <div className='dashboard__content-item'>
          <Link to='/task'>
            <Card>
              <CardHeader title="Tasks" subheader='view tasks' />
              <CardContent>
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={cyan}
                  alt="green iguana"
                />
              </CardContent>
              <CardActions >
                <Typography variant='body2' color="text.secondary">
                  You can view the tasks, manage them and assigned users to the task
                </Typography>
              </CardActions>
            </Card>
          </Link>
        </div>
      </div>

      <div className='dashboard__content'>
        <div className='dashboard__content-item'>
          <Link to='/user'>
            <Card>
              <CardHeader title="Users" subheader='view users' />
              <CardContent>
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={black}
                  alt="green iguana"
                />
              </CardContent>
              <CardActions >
                <Typography variant='body2' color="text.secondary">
                  You can view the users, manage them and assigned projects and tasks
                </Typography>
              </CardActions>
            </Card>
          </Link>
        </div>
        <div className='dashboard__content-item'>
          <Link to='/company'>
            <Card>
              <CardHeader title="Companies" subheader='view companies' />
              <CardContent>
                <CardMedia
                  component="img"
                  height="100"
                  width="100"
                  image={gray}
                  alt="green iguana"
                />
              </CardContent>
              <CardActions >
                <Typography variant='body2' color="text.secondary">
                  You can view the companies, manage them and assigned projects and add members
                </Typography>
              </CardActions>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard