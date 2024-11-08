import React from 'react'
import Navbar from './component/user/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './component/user/Footer/Footer'

export default function Root() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer /> 
    </>
  )
}
