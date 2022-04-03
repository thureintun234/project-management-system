import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Company from '../pages/company/Company'
import NewCompany from '../pages/company/NewCompany'
import Dashboard from '../pages/Dashboard'
import Project from '../pages/project/Project'
import NewTask from '../pages/task/NewTask'
import Task from '../pages/task/Task'
import User from '../pages/user/User'
import NewProject from '../pages/project/NewProject'
import NewUser from '../pages/user/NewUser'
import DetailProject from '../pages/project/DetailProject'

const Routers = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/company'>
          <Route index={true} element={<Company />} />
          <Route path='new' element={<NewCompany />} />
        </Route>
        <Route path='/project' >
          <Route index={true} element={<Project />} />
          <Route path='new' element={<NewProject />} />
          <Route path=':id/details' element={<DetailProject />} />
        </Route>
        <Route path='/task' >
          <Route index={true} element={<Task />} />
          <Route path='new' element={<NewTask />} />
        </Route>
        <Route path='/user'>
          <Route index={true} element={<User />} />
          <Route path='new' element={<NewUser />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routers