import React, { useEffect, useState } from 'react'
import userService from '../../services/user'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService
      .getAll()
      .then(returnedObject => setUsers(returnedObject))
  }, [])

  return (
    <div>
      <h1>User</h1>
      <ul>
        {
          users.map(user => (
            <li key={user._id}>
              {user.username}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users