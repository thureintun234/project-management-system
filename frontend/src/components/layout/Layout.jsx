import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from '../Routers'
import Sidebar from '../sidebar/Sidebar'
import TobNav from '../topnav/TobNav'

import './layout.css'

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="layout__content">
          <TobNav />
          <div className="layout__content-main">
            <Routers />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Layout