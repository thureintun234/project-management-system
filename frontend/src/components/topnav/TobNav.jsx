import { AccountCircle, NotificationsActiveRounded } from '@mui/icons-material'
import { Badge, IconButton, Menu, MenuItem } from '@mui/material'

import React from 'react'

import './topnav.css'

const TobNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notiAnchor, setNotiAnchor] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotiMenu = (event) => {
    setNotiAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotiClose = () => {
    setNotiAnchor(null);
  };

  return (
    <div className='topnav'>
      <h2>Project Management System</h2>
      <div className='user-info'>
        <div className="user-profile">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <div className="user-notification">
          <IconButton size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleNotiMenu}
            color="inherit">
            <Badge badgeContent={2} color="primary">
              <NotificationsActiveRounded color="action" style={{ color: 'white' }} />
            </Badge>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={notiAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(notiAnchor)}
            onClose={handleNotiClose}
          >
            <MenuItem onClick={handleNotiClose}>User One added task</MenuItem>
            <MenuItem onClick={handleNotiClose}>User One changed status</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default TobNav