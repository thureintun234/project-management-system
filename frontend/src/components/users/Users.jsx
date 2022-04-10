import React, { useEffect, useState } from 'react'
import userService from '../../services/user'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService
      .getAll()
      .then(returnedObject => setUsers(returnedObject))
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'assigned_projects', headerName: 'Assigned Projects', width: 150 },
    { field: 'assigned_tasks', headerName: 'Assigned Tasks', width: 150 },
    { field: 'company', headerName: 'Company', width: 150 },
  ];

  const rows = users.map(user => ({
    id: user._id,
    username: user.username,
    assigned_projects: user.assigned_projects.length,
    assigned_tasks: user.assigned_tasks.length,
    company: user.company.name
  }))

  return (
    <div>
      <div>
        <Link to='/user/new' style={{ float: 'right' }}>
          <Button variant='contained' color='primary'>
            Add
          </Button>
        </Link>
      </div>
      <div style={{ height: 300, width: '70%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  )
}

export default Users