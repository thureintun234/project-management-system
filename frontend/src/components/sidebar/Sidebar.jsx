import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/favicon.ico'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__logo" style={{ marginTop: '20px' }}>
        <Link to='/'><img src={logo} alt="Project Logo" /></Link>
      </div>
      <ul className='sidbar__items'>
        <li>
          <Link to='/user'>User</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/task'>Task</Link>
        </li>
        <li>
          <Link to='/company'>Company</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar