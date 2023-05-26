import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from '../pages/Signup'
import Login from '../pages/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes