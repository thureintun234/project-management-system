import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
          <NavLink to='/user'>User</NavLink>
        </li>
        <li>
          <NavLink to='/project'>Project</NavLink>
        </li>
        <li>
          <NavLink to='/task'>Task</NavLink>
        </li>
        <li>
          <NavLink to='/company'>Company</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar